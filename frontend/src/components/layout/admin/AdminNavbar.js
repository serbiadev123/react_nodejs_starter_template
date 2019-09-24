import React, { Component } from "react";
import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const AdminNavigationStyle = styled.div`
    color: white;

    .dropdown-toggle::after {
        border: 0;
    }
`;

class AdminSideMenu extends Component {
    render() {
        return  <AdminNavigationStyle>
                    <Navbar bg="light" expand="lg">
                        <Nav className="mr-auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-custom-components">
                                    Your profile
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <p>Welcome!</p>
                                    <Dropdown.Item eventKey="1">My Account</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" >Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar>
                </AdminNavigationStyle>
    }
}

export default AdminSideMenu;
