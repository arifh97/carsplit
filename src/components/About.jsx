import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import checkbox from '../assets/img/checkbox.svg'
import Calendar from './Calendar'

export default function About(){
    return(
        <div className='about pt-130'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="about-content">
                            <h3>What is Carsplit about ! How to start ?</h3>
                            <ul>
                                <li className="d-flex flex-wrap">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <h5>Invest</h5>
                                        <p><span>Investing in Carsplit allows you to own a  part of a supercar, which we then rent out to customers. as an investor, you receive a amount of the profits from the rental income  </span> <a href="/#">Read more...</a></p>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <h5>We rent</h5>
                                        <p><span>With Carsplit, you don't have to worry about the hassle of renting out your supercar investment. We take care of everything from 0 to hundred, including marketing the vehicle</span> <a href="/#">Read more...</a></p>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap">
                                    <div className="icon">
                                        <object type="image/svg+xml" data={checkbox}></object>
                                    </div>
                                    <div className="content">
                                        <h5>You get paid</h5>
                                        <p><span>Imagine possessed a supercar and earning money from it ? that's the beauty of Carsplit. as an investor, you can lean back and watch your money grow</span> <a href="/#">Read more...</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-dates d-flex">
                            <div className="left">
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}