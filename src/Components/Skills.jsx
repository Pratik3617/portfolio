import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png"

import "../assets/style/Skills.css";

export default function Skills()  {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
  return (
    <section className="skills" id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid dolorem non aspernatur, aut corrupti consectetur minima placeat exercitationem, consequuntur obcaecati deserunt asperiores, explicabo vitae animi possimus modi? Minus, architecto?
                        </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="web development"/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="brand identity"/>
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="logo design"/>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="web designer"/>
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left'  alt="background" src={colorSharp}/>
    </section>
  )
}
