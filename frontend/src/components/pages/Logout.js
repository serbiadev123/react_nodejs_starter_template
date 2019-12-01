import React, { Component } from "react";
import { Redirect } from 'react-router';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LINKS } from "../../js/Enums";
import { processLoadingWindow, userLogout } from "../../js/store/actions/AdminActions";

class Logout extends Component {
    /**
     * Call the logout action before redirecting the user
     */
    componentDidMount() {
        this.props.userLogout()
    }
    // maybe we can check the user role before redirecting so we redirect to different
    // areas of the website, but for now we only redirect to home
    render(){
        return <Redirect to={LINKS.HOME.relativeUrl}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processLoadingWindow: (data) => dispatch(processLoadingWindow(data)),
        userLogout: () => dispatch(userLogout())
    }
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Logout)
);
