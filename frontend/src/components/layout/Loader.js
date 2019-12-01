import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

import { Spinner } from "react-bootstrap";

const LoaderDiv = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: block;
    opacity: 0.7;
    background-color: #fff;
    z-index: 99;
    text-align: center;
`;

class Loader extends Component {
    render() {
        return this.props.loader ? 
            <LoaderDiv>
                <Spinner style= {{
                        top: '50%',
                        left: '50%',
                        position: 'absolute'
                    }}
                    animation="grow" size="xxl" />
            </LoaderDiv> :
            null
    }
    
}

const mapStateToProps = (state) => {
    return {
        loader: state.adminReducer.loader
    };
};

export default withRouter(
    connect(
        mapStateToProps
    )(Loader)
);
