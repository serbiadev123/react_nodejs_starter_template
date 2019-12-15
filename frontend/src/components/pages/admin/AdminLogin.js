import React, { Component } from 'react';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { processLoadingWindow, userLogin } from "../../../js/store/actions/AdminActions";

import { Form, Button} from "react-bootstrap";
import { Formik } from 'formik';

import * as Yup from "yup";

class InputComponent extends Component {
    // RegEx for phone number validation
    passwordRegex = /[0-9.]+/
    invalidPasswordMessage = "*Password must contain 2 numbers, 2 special characters and one capital letter"

    // Schema for yup
    validationSchema = Yup.object().shape({
        username: Yup.string()
            .max(30, "*Username or password can't be longer than 30 characters")
            .required("*Username or password are required"),
        pwd: Yup.string()
            // if you want to add specific password type latter you can add a regex and a message
            // and even better let admin set up the password type
            // .matches(this.passwordRegex, this.invalidPasswordMessage)
    });

    render() {
        return (
            <div>
                <Formik initialValues={{ username:"", pwd:""}}
                    validationSchema={this.validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);
                        //add actual backend call to update state
                    
                        this.props.processLoadingWindow(true)

                        this.props.userLogin(values)
                            .then((data)=>{
                                this.props.processLoadingWindow(false)
                            }, (err)=>{
                                console.log(err)
                                this.props.processLoadingWindow(false)
                            });                       
                    }}>
                    {/* Callback function containing Formik state and helpers that handle common form actions */}
                    {( {values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        submitCount,
                        isSubmitting }) => (
                        <Form className="mx-auto" onSubmit={handleSubmit}>
                            <h2>Admin Login:</h2>
                            <Form.Group controlId="FormUsername">
                                <Form.Label>Username or Email:</Form.Label>
                                <Form.Control
                                    as="textarea" 
                                    rows="3"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    isInvalid={submitCount && errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                name="pwd"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pwd}
                                isInvalid={submitCount && errors.pwd}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.pwd}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit"
                                disabled={submitCount && Object.keys(errors).length > 0}>
                                    Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        // bankingTransactionResult: state.adminReducer.bankingTransactionResult
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLoadingWindow: (data) => dispatch(processLoadingWindow(data)),
        userLogin: (data) => dispatch(userLogin(data))
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(InputComponent)
);