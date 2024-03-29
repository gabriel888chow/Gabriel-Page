import React from "react";
import img from "./myself.png";
import floorPlan1 from "./floorPlan1.jpg";
import floorPlan2 from "./floorPlan2.jpg";
import floorPlan3 from "./floorPlan3.jpg";
import floorPlan4 from "./floorPlan4.jpg";
import floorPlan5 from "./floorPlan5.jpg";
import floorPlan6 from "./floorPlan6.jpg";
import "./About.css";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
// import ImageSlider from '../Slider/ImageSlider';
// import { SliderData } from '../Slider/SliderData';
import { Fade, Flip, Slide } from "react-reveal";
// import { width } from '@mui/system';
// import { ScrollPage, Animator, StickyIn, FadeIn, ZoomIn, batch } from "react-scroll-motion";
import IGapi from "../IGapi/IGapi";
// import { connect } from 'react-redux';
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import SimpleImageSlider from "react-simple-image-slider";
import Travel1 from "./Travel1.jpg";
import Travel2 from "./Travel2.jpg";
import Travel3 from "./Travel3.jpg";
import Travel4 from "./Travel4.jpg";
import Travel5 from "./Travel5.jpg";

function About() {
  // const img = document.getElementById('plan');
  // window.addEventListener('scroll', function() {
  //   img.style.backgroundSize = 160 - +this.window.pageYOffset/12+'%';
  //   img.style.opacity = 1 - +this.window.pageYOffset/700+'';
  // })
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const images = [
    { url: Travel1 },
    { url: Travel2 },
    { url: Travel3 },
    { url: Travel4 },
    { url: Travel5 },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginTop="100px"
        >
          <Grid container justifyContent="center">
            <Grid item xl={9} md={9} className="title">
              <Fade left>
                <h1>GABRIEL CHOW</h1>
                <p>
                  {" "}
                  I joined an intensive Front-end Web developer course at
                  Generation Hong Kong and it equipped me with the skills of
                  HTML, CSS, JavaScript, React.
                </p>
                <Link className="btn" to="/projectPage">
                  {" "}
                  Click my project{" "}
                </Link>
              </Fade>
            </Grid>
            <Grid container item xl={3} md={3} className="photoColor">
              <Fade right>
                <img src={img} alt="pic" />
              </Fade>
            </Grid>
          </Grid>
          {/* <Grid >
          <hr className='bar'/>
        </Grid> */}
          <Grid container className="slider" justifyContent="center">
            <Flip top>
              <h1 className="d-flex justify-content-center">Travel Photos</h1>
              <p>
                {" "}
                I like to traval, when I saw the nice view, I will use mobile to
                take pictures. There are my pictures I was took. It is from Hong
                Kong, Japan and Taiwan.
              </p>
            </Flip>
            <Fade top>
              {/* <ImageSlider slides={SliderData} /> */}
              {/* igapi npm */}
              <SimpleImageSlider
                width={1200}
                height={800}
                images={images}
                showBullets={true}
                // showNavs={true}
                autoPlay={true}
              />
              {/* <IGapi /> */}
            </Fade>
          </Grid>
          <Divider className="bar" />
          <Grid container>
            <Grid item xs={10} xl={4} md={4} className="aboutColor">
              {/* <Grid item xs={10} xl={4} md={4} > */}
              {/* <div className="aboutText"> */}
              <Flip top>
                <div className="aboutColor aboutText">
                  <h1>About Me</h1>
                  <p>
                    I was working in interior design, before I learning
                    Front-end Web developer, this is my drawing of my job.
                  </p>
                </div>
              </Flip>
              {/* </div> */}
            </Grid>
            <Grid
              container
              item
              xs={2}
              xl={8}
              md={8}
              className="plan"
              id="plan"
              sx={{ justifyContent: "center" }}
            >
              <Slide right>
                <img src={floorPlan1} alt="pic" />
                <img src={floorPlan2} alt="pic" />
                <img src={floorPlan3} alt="pic" />
              </Slide>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className="moblie">
        {/* <Grid container item xs={6} className='aboutColor moblie'>
          <div className='aboutTextMoblie'>
            <Slide left>
              <h1>About Me</h1>
              <p>I was working in interior design, before I learning Front-end Web developer, this is my drawing of my job.</p>
            </Slide>
          </div>
        </Grid> */}
        <Grid container item xs={12} className="img">
          <Slide bottom>
            <img src={floorPlan4} alt="pic" />
            <img src={floorPlan5} alt="pic" />
            <img src={floorPlan6} alt="pic" />
          </Slide>
        </Grid>
      </div>
    </>
  );
}

export default About;
