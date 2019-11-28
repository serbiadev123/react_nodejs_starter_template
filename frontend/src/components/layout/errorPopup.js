import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeErrorPopup } from "../../js/store/actions/AdminActions";

import { Modal, Button} from "react-bootstrap";

class ErrorPopup extends Component {
    handleClose = () => {this.props.closeErrorPopup(true)}
    handleOpen = () => {}

    render() {
        return ( <div>
            <Modal show={this.props.error} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>{this.props.errorMessage}</h2>  
                    <p>
                        Sorry, there has been an error, please try again. 
                        If you still have issues contact the support
                    </p>
                      
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}
    
}

const mapStateToProps = (state) => {
    return {
        error: state.adminReducer.error,
        errorMessage: state.adminReducer.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeErrorPopup: (data) => dispatch(closeErrorPopup(data))
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ErrorPopup)
);
