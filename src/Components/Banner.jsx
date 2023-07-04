import {useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/header-img.svg";

import "../assets/style/Banner.css";
import "animate.css";
import TrackVisibility from 'react-on-screen';

export default function Banner() {

    const [loopnum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);

    const toRotate = ["Web Developer","Web Designer","UI/UX Designer"];

    const [text,setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let upadatedText = isDeleting ? fullText.substring(0 ,text.length - 1) : fullText.substring(0 ,text.length + 1);

        setText(upadatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(isDeleting && upadatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && upadatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopnum + 1);
            setDelta(500);
        }
    }

  return (
    <section className="banner" id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate_fadeIn" :""}>
                        <span className="tagline">
                            Welcome to my  Portfolio
                        </span>
                        <h1>
                            {'Hi I am webdecoded '}
                            <span className="wrap">
                                {text}
                            </span>
                            </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit explicabo quaerat, voluptatem nostrum sit libero dolore deserunt nemo nobis corrupti dolores, rem, perspiciatis modi facere laborum expedita voluptas. Facere, similique.
                        </p>

                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>

                        </div>
                    }
                    </TrackVisibility>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
