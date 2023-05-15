import React, { useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/img/program-img.png'
import visaCardImg from '../assets/img/visa.png'
import AOS from 'aos';
export default function Congratulations(){
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='congratulations pt-180'>
            <Container>
                <Row>
                    <Col lg={10}>
                        <div className="section-title">
                            <h2 data-aos="fade-up" data-aos-duration="1000">Congratulations!</h2>
                            <p data-aos="fade-up" data-aos-duration="1200"> You are just one step away from becoming a part owner of your dream supercar. Complete the payment process now and join the exclusive community of Carsplit investors who get to enjoy the thrills and rewards of owning a share of a high-end vehicle.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="bank-card-box-item one">
                           <div className="bank-card-header">
                            <h4>Credit/ Debit card</h4>
                           </div>
                           <div className="bank-card-body">
                            <img src={visaCardImg} alt="" />
                           </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bank-card-box-item one">
                           <div className="bank-card-header">
                            <h4>Cryptocurrency Deposit</h4>
                           </div>
                           <div className="bank-card-body">
                            <img src={visaCardImg} alt="" />
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}