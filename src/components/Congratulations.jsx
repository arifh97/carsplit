import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import visaCardImg from '../assets/img/visa.png'
import debitCartStar from '../assets/img/debit-card-stars.png'
import cryptocurrencyImg from '../assets/img/cryptocurrency-deposit.png'
import dipositStars from '../assets/img/diposit-stars.png'
import help from '../assets/img/help.svg'
import AOS from 'aos';
import TUTOMOONPAY from '../assets/pdf-files/TUTOMOONPAY.pdf';
import TUTOUSDT from '../assets/pdf-files/TUTOUSDT.pdf';
export default class Modal extends Component {
  render(){
    let modelStyle ={
      display: 'block',
      backgroundColor : "rgba(0,0,0,0.8)",
      
    }
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, []);
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
    return(
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
            <div className="modal-body">
                <div className='congratulations pt-180'>
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
                        
                        <Row>
                            <Col lg={6}>
                                <div className="help">
                                <a href="https://t.me/CarsplitSupport"> <img src={help} alt="" /> help</a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="contact-email">
                                <p>Support: <a href="mailto:contact@carsplit.io">contact@carsplit.io</a></p> 
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Container>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}