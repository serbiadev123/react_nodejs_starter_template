import React, { Component } from "react";
import { Link as RouterLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from '../../js/helperClasses/Link';
import { LINKS } from '../../js/Enums';

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
    ]

    rightHalfLinks = [
        LINKS.CONTACT_US,
        LINKS.ABOUT_US
    ]

    render() {
        return  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={RouterLink} to={this.logoLink.relativeUrl}>{this.logoLink.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {this.leftHalfLinks.map((link)=>{
                            return link.render();
                        })}
                    </Nav>
                    <Nav>
                        {this.rightHalfLinks.map((link)=>{
                            return link.render();
                        })}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}

export default Header;
