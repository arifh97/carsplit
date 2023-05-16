import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos';
import Logo from '../assets/img/logo.png';
import Button from 'react-bootstrap/Button';
export default function Community(){
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
                        <Button onClick={handleShow}>Terms & Conditions Privacy</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
        <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='congratulations'>
        <Container>
            <Modal.Body>
                <Row>
                    <Col>
                        <div className="trams-condition-content">
                        <h1>Terms & Conditions for CarSplit</h1>
                        

                        <h3 className="mt-5 mb-3">Introduction</h3>
                        <p>
                        These Terms & Conditions govern your use of the CarSplit platform and services. By accessing or using the CarSplit platform, you agree to comply with these Terms & Conditions. Please read them carefully before proceeding.</p>

                        <h3 className="mt-5 mb-3">Definitions</h3>
                        

                        <p>"CarSplit" refers to the CarSplit platform, including the website and mobile applications.
                        "User" refers to any individual or entity using or accessing the CarSplit platform.
                        "Owner" refers to the individual or entity that owns a car listed on the CarSplit platform.
                        "Investor" refers to the individual or entity that invests in a car listed on the CarSplit platform.
                        </p>

                        <h3 className="mt-5 mb-3">User Obligations</h3>
                        <ul>
                            <li>3.1 Eligibility: Users must be at least 18 years old and legally capable of entering into binding agreements.</li>
                            <li> 3.2 Accurate Information: Users must provide accurate and up-to-date information during the registration and listing process.</li>
                            <li>3.3 Compliance: Users must comply with all applicable laws, regulations, and these Terms & Conditions while using the CarSplit platform.</li>
                            <li>3.4 Prohibited Activities: Users must not engage in any illegal, fraudulent, or unauthorized activities on the CarSplit platform.</li>
                        </ul>
                        
                       
                        
                        
                        <h3 className="mt-5 mb-3">Car Listings and Investments</h3>
                        <ul>
                            <li>  4.1 Car Listings: Carsplit CEO is the only car lister on the CarSplit platform, he will list cars for investment, providing accurate and complete information about the car.</li>
                            <li> 4.2 Investments: Investors can invest in your listed car by purchasing shares, agreeing to the terms and conditions specified for the investment opportunity.</li>
                            <li> 4.3 Ownership Rights: Investors own a proportional share of your car's value and are entitled to a share of the revenue generated from the car's rental activities.</li>
                            <li> 4.4 Risk Disclosure: Users acknowledge and understand the inherent risks associated with car investments, including the potential for financial loss.</li>
                        </ul>
                       
                        
                        
                        <h3 className="mt-5 mb-3">Fees and Payments</h3>
                        <ul>
                            <li>  5.1 CarSplit Fees: CarSplit may charge fees for facilitating investments in your car. These fees will be clearly communicated to Users.</li>
                            <li>5.2 Payment Processing: Users agree to provide accurate payment information and authorize CarSplit to process payments related to car investments and platform fees.</li>
                        </ul>
                        
                       
                        
                        <h3 className="mt-5 mb-3">Disclaimer and Limitation of Liability</h3>
                        <ul>
                            <li> 6.1 CarSplit makes no guarantees or warranties regarding the performance, profitability, or availability of car investments.</li>
                            <li>6.2 Users understand and agree that CarSplit shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of the platform.</li>
                        </ul>
                       
                        
                        <h3 className="mt-5 mb-3">Intellectual Property</h3>
                        <ul>
                            <li>7.1 All intellectual property rights related to the CarSplit platform, including trademarks, logos, and content, are owned by CarSplit.</li>
                            <li>7.2 Users must not use, copy, reproduce, modify, or distribute any CarSplit intellectual property without prior written consent.</li>
                        </ul>
                        
                        
                        <h3 className="mt-5 mb-3">Termination</h3>
                        <p> CarSplit reserves the right to terminate or suspend a User's access to the platform at any time for any violation of these Terms & Conditions.</p>

                       
<h3 className="mt-5 mb-3">Governing Law and Jurisdiction</h3>
                        <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates (UAE). Any disputes arising out of or relating to these Terms & Conditions shall be subject to the exclusive jurisdiction of the courts of the UAE.</p>
                        
                        <h3 className="mt-5 mb-3">Updates and Amendments</h3>
                        <p>CarSplit may update or amend these Terms & Conditions from time to time. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the updated Terms & Conditions.</p>
                        

                        <p className="mt-4"><b>Please read these Terms & Conditions carefully and contact us if you have any questions or concerns.</b></p>
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