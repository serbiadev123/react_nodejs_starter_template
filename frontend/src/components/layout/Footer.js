import React, { Component } from "react";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from '../../js/helperClasses/Link'
import { Link as RouterLink} from 'react-router-dom';
import { LINKS } from '../../js/Enums';

const FooterStyle = styled.div`
    background-color: #343a40;
    color: white;
`;

const FooterElement = styled.div`
    text-align: justify;
    .footer-element-title {
        text-align: center;
        padding-bottom: 15px;
    }

    .service-list {
        text-align: center;
    }

    .footer-address {
        p {
            margin: 0;
        }
        padding-bottom: 15px;
    }
`;

class Footer extends Component {
    aboutUsTitle = "About us:";
    aboutUsText = 'We are an Auckland based company, located on the North Shore, built on 2nd generation experience in the tiling industry. Our services cover the high-end, commercial & residential market place throughout Auckland - and nationwide for larger projects.';

    ourServicesTitle = "OurServices:";
    ourServices = [
        new Link("Project Management", '#'),
        new Link("Tiling & Tile Supply", '#'),
        new Link("Waterproofing", '#'),
        new Link("Deck Jacks", '#'),
        new Link("Deck Jacks", '#'),
        new Link("Stone Work", '#'),
        new Link("Under Floor Heating", '#'),
        new Link("Renovations", '#')
    ];

    contactUsTitle = "Contact us:";
    phone = new Link("0800 638 454", "#");
    email = new Link("info@neweratilingnz.co.nz", "#");
    address = [
        "7 Colway Place,",
        "Wairau Valley,",
        "Auckland 0627",
        "New Zealand",
    ];

    render() {
        return  <FooterStyle>
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <FooterElement>
                                    <h4 className="footer-element-title">{this.aboutUsTitle}</h4>
                                    <p>{this.aboutUsText}</p>
                                </FooterElement>
                            </Col>
                            <Col className="text-center">
                                <FooterElement>
                                    <h4 className="footer-element-title">{this.ourServicesTitle}</h4>
                                    <div className="service-list">
                                        {this.ourServices.map((service, index)=>{
                                            return <p key={index}>{service.name}</p>
                                        })}
                                    </div>
                                    
                                </FooterElement>
                            </Col>
                            <Col className="text-center">
                                <FooterElement>
                                    <h4 className="footer-element-title">{this.contactUsTitle}</h4>
                                    <p>Phone: {this.phone.name}</p>
                                    <p>Email: {this.email.name}</p>
                                    <div className="footer-address">
                                        {this.address.map((addressLine, index)=>{
                                            return <p key={index}>{addressLine}</p>
                                        })}
                                    </div>
                                    <div>
                                        <p>Contact Page: <RouterLink to={LINKS.CONTACT_US.relativeUrl}>{LINKS.CONTACT_US.name}</RouterLink></p>
                                    </div>
                                </FooterElement>
                            </Col>
                        </Row>
                    </Container>
                </FooterStyle>
    }
}

export default Footer;
