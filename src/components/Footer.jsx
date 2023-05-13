import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from '../assets/img/logo.png'

export default function Community(){
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={4}>
                        <a href="/#" className="heading-logo"><img src={Logo} alt="" /></a>
                    </Col>
                    <Col sm={4} className="text-center">
                        <p>2023. All Rights Reserved</p>
                    </Col>
                    <Col sm={4} className="text-end">
                        <a href="/#">Terms & Conditions Privacy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}