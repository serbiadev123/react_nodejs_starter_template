import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import { pageReload } from "./js/store/actions/AdminActions";
import * as userRoles from "./js/enums/UserRoles";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routes from "./components/router/Routes"
import AdminSideMenu from "./components/layout/admin/AdminSideMenu";
import AdminLogin from "./components/pages/admin/AdminLogin";
import AdminNavbar from "./components/layout/admin/AdminNavbar";
import ErrorPopup from "./components/layout/ErrorPopup";
import Loader from "./components/layout/Loader";

class App extends Component {
    /**
     * Fix for some browsers which don't support history
     */
    supportsHistory = 'pushState' in window.history;

    state = {
        isAdminPanel: false
    }

    constructor(props) {
        super(props)
        this.setAdminPanel = this.setAdminPanel.bind(this)
    }

    /**
     * Make sure to reset redux data that needs to be reset on page reload
     */
    componentDidMount() {
        window.onbeforeunload = function() {
            this.props.pageReload();
        }.bind(this);
    }
    /**
     * Child component will update the state if the current page is admin page or client page
     * @param {boolean} isAdminPanel 
     */
    setAdminPanel(isAdminPanel) {
        this.setState({
            isAdminPanel: isAdminPanel
        })
    }

    /**
     * Renderes the main content depending on the route and url
     */
    renderMainContent(){
        return <Routes setAdminPanel={this.setAdminPanel}></Routes>;
    }

    /**
     * Renders the client page
     */
    renderClientPage() {
        return  <div>
                    <Header></Header>
                    {this.renderMainContent()}
                    <Footer></Footer>
                </div>
    }

    /**
     * Renders the admin page
     */
    renderAdminPage() {
        let a = [];
        for(let i=0;i<200;i++){
            a.push('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }

        return  <div>
                    {
                        this.props.userRole === userRoles.ADMIN ?
                        <div className="d-flex">
                            <AdminSideMenu></AdminSideMenu>
                            <div className="flex-grow-1" style={{'overflowY':'scroll', "height": "100vh"}} sm={8}>
                                <AdminNavbar></AdminNavbar>
                                {this.renderMainContent()}
                                {a.map((t, index)=>{return <p key={index}>{t}</p>})}
                            </div>
                        </div> :
                        <AdminLogin></AdminLogin>
                    }
                </div> 
    }

    render() {
        return <BrowserRouter forceRefresh={!this.supportsHistory}>
                <ErrorPopup></ErrorPopup>
                <Loader></Loader>
                {this.state.isAdminPanel ? this.renderAdminPage() : this.renderClientPage()}
            </BrowserRouter>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.adminReducer.user,
        userRole: state.adminReducer.userRole
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pageReload: () => dispatch(pageReload())
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
