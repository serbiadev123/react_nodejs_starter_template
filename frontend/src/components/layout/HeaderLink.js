import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Link from '../../js/helperClasses/Link';

import { NavDropdown, Nav } from 'react-bootstrap';

class HeaderLink extends Component {
    render() {
        if (this.props.data.subMenu.length) {
            return <NavDropdown key={this.props.index} title={this.props.data.name} id="collasible-nav-dropdown">
                        {this.props.data.subMenu.map((link, index)=>{
                            return link === Link.DIVIDER ?
                                <NavDropdown.Divider key={index}/> :
                                <NavDropdown.Item  as={RouterLink} key={index} to={link.relativeUrl}>{link.name}</NavDropdown.Item>
                        })}
                    </NavDropdown>
        }

        return  <Nav.Link   
                    as={RouterLink} 
                    key={this.props.index} 
                    to={this.props.data.relativeUrl}>
                    {this.props.data.name}
                </Nav.Link>
    }
}


export default HeaderLink;
