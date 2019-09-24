import React, { Component } from "react";
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import SideMenuLinks from './SideMenuLinks';

const AdminSidebarStyle = styled.div`
    padding: 15px 15px 15px 30px;
    background-color: #343a40;
    color: white;

    .admin-logo-img {
        padding: 30px;
        max-width: 200px;
    }
`;

class AdminSideMenu extends Component {
    // contactUsTitle = "Contact us:";
    // phone = new Link("0800 638 454", "#");
    // email = new Link("info@neweratilingnz.co.nz", "#");
    // address = [
    //     "7 Colway Place,",
    //     "Wairau Valley,",
    //     "Auckland 0627",
    //     "New Zealand",
    // ];

    render() {
        return  <AdminSidebarStyle>
                    <Image className="admin-logo-img" src="/images/logo.png" rounded></Image> 
                    <p>Navigation</p>
                    <SideMenuLinks></SideMenuLinks>
                </AdminSidebarStyle>
    }
}

export default AdminSideMenu;
