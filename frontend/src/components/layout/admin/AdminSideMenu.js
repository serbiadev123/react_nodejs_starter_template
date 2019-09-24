import React, { Component } from "react";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link as RouterLink} from 'react-router-dom';

const AdminSidebarStyle = styled.div`
    padding: 15px;
    background-color: #343a40;
    color: white;
`;

class AdminSideMenu extends Component {
    // aboutUsTitle = "About us:";
    // aboutUsText = 'We are an Auckland based company, located on the North Shore, built on 2nd generation experience in the tiling industry. Our services cover the high-end, commercial & residential market place throughout Auckland - and nationwide for larger projects.';

    // ourServicesTitle = "OurServices:";
    // ourServices = [
    //     new Link("Project Management", '#'),
    //     new Link("Tiling & Tile Supply", '#'),
    //     new Link("Waterproofing", '#'),
    //     new Link("Deck Jacks", '#'),
    //     new Link("Deck Jacks", '#'),
    //     new Link("Stone Work", '#'),
    //     new Link("Under Floor Heating", '#'),
    //     new Link("Renovations", '#')
    // ];

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
                    <p>cascascascascasc</p>
                    <p>cascascascascasc</p>
                    <p>cascascascascasc</p>
                    <p>cascascascascasc</p>
                    <p>cascascascascasc</p>
                    <p>cascascascascasc</p>
                </AdminSidebarStyle>
    }
}

export default AdminSideMenu;
