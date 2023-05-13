import React, { useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/img/program-img.png'
import AOS from 'aos';
export default function Program(){
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='program pt-180'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="section-title text-center">
                            <h2 data-aos="fade-up" data-aos-duration="1000">Ambassador Program</h2>
                            <p data-aos="fade-up" data-aos-duration="1200"> CarSplit ambassador, will have the opportunity to join a community of like-minded individuals who are passionate about investing and luxury cars.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='align-items-end'>
                    <Col lg={5}>
                        <div className="program-content">
                            <h3 data-aos="fade-up" data-aos-duration="1400">Benefits of Being a CarSplit Ambassador</h3>
                            <ul>
                                <li data-aos="fade-up" data-aos-duration="1600">
                                    <h4>Access exclusive price</h4>
                                    <p>Join our exclusive private community and REACH a world of opportunities</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1800">
                                    <h4>Gift</h4>
                                    <p>Enjoy exclusive gifts and rewards as a Carsplit investor, because we value your partnership</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2000">
                                    <h4>Travel</h4>
                                    <p>Experience luxury travel like never before with our exclusive travel packages</p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2200">
                                    <h4>Long Term Invest</h4>
                                    <p>Make a wise investment in supercars and enjoy long-term returns</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="program-img">
                            <img data-aos="fade-left" src={img} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} className='text-center pt-30'>
                        <a href="/#" className="site-btn" data-aos="fade-up" data-aos-duration="2000">Become an Ambassador</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}