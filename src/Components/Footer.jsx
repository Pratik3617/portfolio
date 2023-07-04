import { Col, Container, Row } from 'react-bootstrap'
import Newsletter from './Newsletter'
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

import "../assets/style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row className='align-item-center'>
                <Newsletter/>
                <Col sm={6}>
                    <img src={logo} alt='logo'/>
                </Col>

                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href=''>
                            <img src={navIcon1} alt="navIcon"/>
                        </a>
                        <a href=''>
                            <img src={navIcon2} alt="navIcon"/>
                        </a>
                        <a href=''>
                            <img src={navIcon3} alt="navIcon"/>
                        </a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
