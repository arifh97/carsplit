import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import checkbox from '../assets/img/checkbox.svg'
import calenderBg from '../assets/img/calender-bg.svg'
import Calendar from './Calendar';
import AOS from 'aos';

export default function About(){
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
    const [collapse, setCollapse] = useState(false);
    return(
        <div className='about pt-130'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="about-content">
                            <h3  data-aos="fade-up" data-aos-duration="1000">What is Carsplit about ! How to start ?</h3>
                            <ul>
                                <li className="d-flex flex-wrap"  data-aos="fade-up" data-aos-duration="1200">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <h5>Invest</h5>
                                        <p>
                                            Investing in Carsplit allows you to own a PART of a supercar, which we then rent out to customers. As an investor, you receive a AMOUNT of the profits from the rental income <span className={`long-text ${collapse ? "expanded" : ""}`}>
                                            providing a unique opportunity to earn passive income from luxury vehicles AND BE A SUPERCARS OWNER 
                                            </span> 
                                            <a onClick={() => setCollapse((prev1) => !prev1)}>Read More</a>
                                        </p>
                                        
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap" data-aos="fade-up" data-aos-duration="1400">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <h5>We rent</h5>
                                        <p>
                                            With Carsplit, you don't have to worry about the hassle of renting out your supercar investment. We take care of everything from 0 to hundred, including marketing the vehicle <span className={`long-text ${collapse ? "expanded" : ""}`}>
                                            finding qualified renters, managing the rental process, and ensuring that you get YOUR INCOME. Our team of experts handles all the logistics so that you can LEAN back, relax, and enjoy the benefits of your investment without any of the stress or hassle. With Carsplit, investing in a supercar AND BE AN OWNER has never been easier or more profitable.
                                            </span> 
                                            <a onClick={() => setCollapse((prev) => !prev)}>Read More</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap" data-aos="fade-up" data-aos-duration="1600">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Imagine POSSESSED A SUPERCAR AND earning money FROM IT ? That's the beauty of Carsplit. As an investor, you can LEAN back and watch your money grow <span className={`long-text ${collapse ? "expanded" : ""}`}>
                                            while we handle all the details of renting out the car and ensuring a seamless experience for customers.
                                            </span> 
                                            <a onClick={() => setCollapse((prev) => !prev)}>Read More</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-dates d-flex flex-wrap"  data-aos="fade-right" data-aos-duration="1800">
                            {/* <div className="left">
                                <Calendar />
                            </div>
                            <div className="right">
                                <div className="about-dates-card">
                                    <strong className='d-block'>Total Days</strong>
                                    <span>18</span>
                                </div>
                                <div className="about-dates-card">
                                <strong className='d-block'>Total Earn</strong>
                                    <span>$7800</span>
                                </div>
                                <a href="/#" className="site-btn mt-auto">Claim</a>
                            </div> */}
                            <img src={calenderBg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}