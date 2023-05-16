import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/img/invest-img.png'
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos';
import visaCardImg from '../assets/img/visa.png'
import debitCartStar from '../assets/img/debit-card-stars.png'
import cryptocurrencyImg from '../assets/img/cryptocurrency-deposit.png'
import dipositStars from '../assets/img/diposit-stars.png'
import help from '../assets/img/help.svg'
import TUTOMOONPAY from '../assets/pdf-files/TUTOMOONPAY.pdf';
import TUTOUSDT from '../assets/pdf-files/TUTOUSDT.pdf';
export default function Invest(){
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
    const [fullscreen, setFullscreen] = useState(true);
    const TUTOMOONPAYButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('TUTOMOONPAY').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = TUTOMOONPAY;
                alink.download = 'TUTOMOONPAY.pdf';
                alink.click();
            })
        })
    }
    const TUTOUSDTButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('TUTOUSDT.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = TUTOUSDT;
                alink.download = 'TUTOUSDT.pdf';
                alink.click();
            })
        })
    }
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(
       
        <>
         <div className='invest pt-180'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center'>
                        <div className="invest-img">
                            <img data-aos="zoom-in" src={img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="invest-content">
                            <h3 data-aos="fade-up" data-aos-duration="1000">Buy, Sell And Gain</h3>
                            <p data-aos="fade-up" data-aos-duration="1200">Your shares on the Carsplit marketplace means you're not only gaining potential returns from the luxury supercars you've invested in, but you're also gaining the flexibility to adjust your portfolio as you see fit. </p>
                            <p data-aos="fade-up" data-aos-duration="1400">As you grow your portfolio and become a top investor, you'll have the potential to earn even more through rental income and increased demand for your shares."</p>
                            <a href="/#" className="site-btn" data-aos="fade-up" data-aos-duration="1600"  onClick={handleShow}>Invest now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='congratulations'>
        <Container>
            <Modal.Body>
                <Row>
                    <Col lg={11}>
                        <div className="section-title">
                            <h2 data-aos="fade-up" data-aos-duration="1000">Congratulations!</h2>
                            <p data-aos="fade-up" data-aos-duration="1200"> You are just one step away from becoming a part owner of your dream supercar. Complete the payment process now and join the exclusive community of Carsplit investors who get to enjoy the thrills and rewards of owning a share of a high-end vehicle.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="bank-card-box-item one mb-5" onClick={TUTOMOONPAYButtonClick}>
                        <div className="bank-card-header">
                            <h4>Credit/ Debit card</h4>
                        </div>
                        <div className="bank-card-body">
                            <figure className="visa">
                                <img src={visaCardImg} alt="" />
                            </figure>
                            <figure className="star">
                                <img src={debitCartStar} alt="" />
                            </figure>
                            <p> 24/7 Instant</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bank-card-box-item two mb-5"  onClick={TUTOUSDTButtonClick}>
                            <div className="bank-card-header">
                                <h4>Cryptocurrency Deposit</h4>
                            </div>
                        <div className="bank-card-body">
                            <figure className="visa">
                                <img src={cryptocurrencyImg} alt="" />
                            </figure>
                            <figure className="star">
                                <img src={dipositStars} alt="" />
                            </figure>
                            <p> 1 Hour</p>
                        </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="payment-docs">
                            <ul>
                                <li>Select the desired payment method from the two available options</li>
                                <li>Proceed to payment and confirm the transaction</li>
                                <li>Fill out the form with your information</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="help">
                        <a href="https://t.me/CarsplitSupport"> <img src={help} alt="" /> help</a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="contact-email">
                        <p>Support: <a href="mailto:contact@carsplit.io">contact@carsplit.io</a></p> 
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Container>
        </div>
        </Modal.Body>
        </Modal>
        </>
    )
}