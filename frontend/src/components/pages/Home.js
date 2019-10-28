import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { testAdmin } from "../../js/store/actions/AdminActions";

class Home extends Component {
    constructor(props) {
        super(props);
        setTimeout(function(){
            props.testAction();
        }, 2000);
        
    }

    render() {
        return (
            <div>
            <h2>Home</h2>
            {this.props.testData.msg}
            <p>Action Response: {JSON.stringify(this.props.testData)}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testData: state.adminReducer.testData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testAction: () => dispatch(testAdmin())
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
