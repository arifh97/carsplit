import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Program(){
    return(
        <div className='program'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={8}>
                        <div className="section-title">
                            <h2>Ambassador Program</h2>
                            <p> CarSplit ambassador, will have the opportunity to join a community of like-minded individuals who are passionate about investing and luxury cars.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='align-items-end'>
                    <Col lg={5}>
                        <div className="program-content">
                            <h3>Benefits of Being a CarSplit Ambassador</h3>
                            <ul>
                                <li>
                                    <h4>Access exclusive price</h4>
                                    <p>Join our exclusive private community and REACH a world of opportunities</p>
                                </li>
                                <li>
                                    <h4>Gift</h4>
                                    <p>Enjoy exclusive gifts and rewards as a Carsplit investor, because we value your partnership</p>
                                </li>
                                <li>
                                    <h4>Travel</h4>
                                    <p>Experience luxury travel like never before with our exclusive travel packages</p>
                                </li>
                                <li>
                                    <h4>Long Term Invest</h4>
                                    <p>Make a wise investment in supercars and enjoy long-term returns</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="program-img"></div>
                    </Col>
                    <Col sm={12} className='text-center'>
                        <a href="/#" className="site-btn">Become an Ambassador</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}