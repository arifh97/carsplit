import React, { useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/img/invest-img.png'

import AOS from 'aos';
export default function Invest(){
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
    return(
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
                            <a href="/#" className="site-btn" data-aos="fade-up" data-aos-duration="1600">Invest now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}