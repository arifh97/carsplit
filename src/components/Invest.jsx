import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/img/invest-img.png'

export default function Invest(){
    return(
        <div className='invest pt-180'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <div className="invest-img">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="invest-content">
                            <h3>Buy, Sell And Gain</h3>
                            <p>Your shares on the Carsplit marketplace means you're not only gaining potential returns from the luxury supercars you've invested in, but you're also gaining the flexibility to adjust your portfolio as you see fit. </p>
                            <p>As you grow your portfolio and become a top investor, you'll have the potential to earn even more through rental income and increased demand for your shares."</p>
                            <a href="/#" className="site-btn">Invest now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}