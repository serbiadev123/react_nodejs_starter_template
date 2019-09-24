import React, { Component } from "react";
import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

const AdminNavigationStyle = styled.div`
    color: white;

    .profile-button {
        background-color: #98a6ad;
        border-color: #98a6ad;

        .admin-logo-avatar {
            max-height: 32px;
        }
    }
    .dropdown-toggle::after {
        border: 0;
    }
`;

class AdminSideMenu extends Component {
    imgUrl = "";
    fullName = "Boris Krnjajic";

    render() {
        return  <AdminNavigationStyle>
                    <Navbar bg="light" expand="lg">
                        <Nav className="mr-auto pl-3">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Dropdown className="pr-3">
                                <Dropdown.Toggle className="profile-button" id="dropdown-custom-components">
                                    <Image className="admin-logo-avatar pr-2" src="/images/avatar.jpg" roundedCircle></Image>
                                    {this.fullName}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="pl-3">
                                        <p>Welcome!</p>
                                    </div>
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
