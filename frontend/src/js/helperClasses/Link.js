import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as RouterLink} from 'react-router-dom';

// only 2 level drop down supported for now
class Link {
    name = "";
    relativeUrl = "";
    absoluteUrl = "";
    subMenu = [];

    constructor(name, relativeUrl, subMenu = []) {
        this.name = name;
        this.relativeUrl = relativeUrl;
        this.absoluteUrl = Link.buildAbsolutePath(relativeUrl);
        this.subMenu = subMenu;
    }

    render() {
        Link.key += 1;
        
        if (this.subMenu.length) {
            return <NavDropdown key={Link.key} title={this.name} id="collasible-nav-dropdown">
                {this.subMenu.map((link, index)=>{
                    return link === Link.DIVIDER ?
                        <NavDropdown.Divider key={index}/> :
                        <NavDropdown.Item  as={RouterLink} key={index} to={link.relativeUrl}>{link.name}</NavDropdown.Item>
                })}
            </NavDropdown>
        }
        
        return <Nav.Link as={RouterLink} key={Link.key} to={this.relativeUrl}>{this.name}</Nav.Link>;
    }
}

Link.key = 0;
Link.DIVIDER = "divider";
Link.siteUrl = process.env.REACT_APP_SERVER_URL;
Link.separator = '/';
Link.buildAbsolutePath = function(relativePath) {
    let absolutePath;

    if (Link.siteUrl.endsWith('/') || Link.siteUrl.endsWith('\\')) {
        absolutePath = Link.siteUrl.substring(Link.siteUrl.length - 1);
    } else {
        absolutePath = Link.siteUrl;
    }

    if (relativePath.startsWith('/') || relativePath.startsWith('\\')) {
        absolutePath += relativePath;
    } else {
        absolutePath += Link.separator + relativePath;
    }

    return absolutePath;
}


export default Link;
