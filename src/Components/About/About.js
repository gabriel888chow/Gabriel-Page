import React from 'react';
import img from './myself.png';
import floorPlan1 from './floorPlan1.jpg';
import floorPlan2 from './floorPlan2.jpg';
import floorPlan3 from './floorPlan3.jpg';
import './About.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import ImageSlider from '../Slider/ImageSlider';
// import { SliderData } from '../Slider/SliderData';

export default function About() {
  return (
    <Container>
      <Row className='about'>
        <Col className='title'>
            <h1>GABRIEL CHOW</h1>
            <p> I joined an intensive Front-end Web developer course at Generation Hong Kong and it equipped me with the skills of HTML, CSS, JavaScript, React.</p>
            <Link className="btn" to="/projectPage"> Click my project </Link>
        </Col>
        <Col className='photo photoColor col-3 d-flex justify-content-center'>
            <img src={img} />
        </Col>
      </Row>
          <hr className='bar'></hr>
      <Row className='slider'>
        {/* <ImageSlider slides={SliderData}  /> */}
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://scontent.fhkg1-1.fna.fbcdn.net/v/t39.30808-6/274305358_10159731627522645_8383958661285094762_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=prKstK54k_4AX-TJvgo&_nc_ht=scontent.fhkg1-1.fna&oh=00_AT8m3HNVYtHFsUuvk_yDATSEv_7AW5IfwENj-lGe_z-cgw&oe=62146EE0" class="d-block" alt="img" />
            </div>
            <div class="carousel-item">
              <img src="https://scontent.fhkg1-1.fna.fbcdn.net/v/t39.30808-6/274160942_10159731629127645_4884760078519376138_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=PrOtq9OUVtQAX8aZ4vr&_nc_oc=AQkClknb6Dr54ju3BJLhvLohrc5mcknGwS4cALljHWKeEtenSoIpff-kp_FSRxM8vxY&_nc_ht=scontent.fhkg1-1.fna&oh=00_AT_p-qos5GUNQHorrsXLAELf-IKsvIydEKG_eZTwllFk1Q&oe=62146734" class="d-block" alt="img"/>
            </div>
            <div class="carousel-item">
              <img src="https://scontent.fhkg1-1.fna.fbcdn.net/v/t39.30808-6/274173412_10159731629247645_8235643678915949140_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=mjYVRaLqSi8AX9W7Wl8&_nc_ht=scontent.fhkg1-1.fna&oh=00_AT-pT6QTiKxl46R3DZilcVi-KX3OIKKLqLwR0883GS7Y5w&oe=6214010E" class="d-block" alt="img"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </Row>  
          <hr className='bar'></hr>

        <Row className='aboutMe d-flex align-items-center' >
          <Col className='col-5 aboutColor'>
            <div className='aboutText'>
              <h1>About Me</h1>
              <p>Before I leaning "Front-End"</p>
            </div>
          </Col>
          <Col className='plan col-9 d-flex justify-content-end'>
            <img src={floorPlan1} />
            <img src={floorPlan2} />
            <img src={floorPlan3} />
          </Col>
        </Row> 
    </Container>
  )
}


