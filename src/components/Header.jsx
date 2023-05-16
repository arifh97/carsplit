import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/img/logo.png'
import CarsplitWhitePaper from '../assets/pdf-files/CARSPLIT-WHITEPAPER.pdf';
export default function Header(){
    const CarsplitWhitePaperButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('TUTOUSDT.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = CarsplitWhitePaper;
                alink.download = 'CarsplitWhitePaper.pdf';
                alink.click();
            })
        })
    }

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
                        <Button className="site-btn" onClick={CarsplitWhitePaperButtonClick}>White Paper</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}