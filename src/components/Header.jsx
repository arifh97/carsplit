import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/img/logo.png'

export default function Header(){
    return(
        <header className="heading">
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <a href="/#" className="heading-logo">
                            <img src={Logo} alt="" />
                        </a>
                    </Col>
                    <Col className='text-end'>
                        <a href="/#" className="site-btn">White Paper</a>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}