import React, { Component } from "react";
import { ADMIN_LINKS } from '../../../js/Enums'

import SideMenuLink from "./SideMenuLink";
import Accordion from 'react-bootstrap/Accordion';

class SideMenuLinks extends Component {
    sideMenuLinks = [
        ADMIN_LINKS.DASHBOARD,
        ADMIN_LINKS.APPS,
        ADMIN_LINKS.PAGES,
    ];

    render() {
        return  <Accordion style={{"background" : "#343a40"}}>
                    {this.sideMenuLinks.map((linkData, index)=>{
                        return <SideMenuLink key={index} data={linkData} eventKey={index}></SideMenuLink>
                    })}
                </Accordion>
    }
}

export default SideMenuLinks;
