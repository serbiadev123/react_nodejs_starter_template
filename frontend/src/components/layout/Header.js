import React, { Component } from "react";
import { Link as RouterLink} from 'react-router-dom';

import HeaderLink from "./HeaderLink";
import Link from '../../js/helperClasses/Link';
import { LINKS } from '../../js/Enums';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    logoLink = new Link("React-Bootstrap", "home");

    leftHalfLinks = [
        LINKS.FEATURES,
        LINKS.PRICING,
        new Link("Dropdown", "", [
            LINKS.ACTION,
            LINKS.ANOTHER_ACTION,
            LINKS.SOMETHING,
            LINKS.DIVIDER,
            LINKS.SEPERATED_LINK
        ])
    ];

    rightHalfLinks = [
        LINKS.CONTACT_US,
        LINKS.ABOUT_US
    ];

    render() {
        return  <Navbar collapseOnSelect expand="lg" bg="custom" className="custom-brand">
                    <Navbar.Brand className="custom-brand" as={RouterLink} to={this.logoLink.relativeUrl}>{this.logoLink.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto custom-header-links">
                        {this.leftHalfLinks.map((link, index)=>{
                            return <HeaderLink key={index} data={link} index={index}></HeaderLink>;
                        })}
                    </Nav>
                    <Nav className="custom-header-links">
                        {this.rightHalfLinks.map((link, index)=>{
                            return <HeaderLink key={index} data={link} index={index}></HeaderLink>;
                        })}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}

export default Header;
