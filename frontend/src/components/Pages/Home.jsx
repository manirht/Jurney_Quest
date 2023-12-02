import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import worldImg from "../../assets/images/world.png";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import herovideo from "../../assets/images/hero-video.mp4";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../../services/ServiceList";
import FeaturedToursList from "../FeaturedTours/FeaturedToursList";
import experienceImg from "../../assets/images/experience.png";
import MasonryImagesGallery from "../image-gallery/MasonryImagesGallery";
import Testimonials from "../Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__cotent">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go!"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h2 className="fs-bold h2">Travelling opens the door to creating</h2>
                <span className="h2"><TypeAnimation
                  sequence={[
                    ``,
                    2000,
                    `Memories`,
                    2000,
                  ]}
                  repeat={Infinity}
                  cursor={true}
                  style={{
                    whiteSpace: "pre-line",
                    display: "inline-block",
                    fontSize: "30px",
                  }}
                  omitDeletionAnimation={true}
                /></span>
                <p>
                  Discover the world's wonders through our bespoke travel experiences, designed to inspire, exhilarate, and rejuvenate. Join us, and turn your travel dreams into a reality that exceeds your wildest imagination.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={herovideo} alt="herovideo" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="heroImg" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour__title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience<br />
                  We will serve you
                </h2>
                <p>
                  Embark on a journey of discovery and luxury with our seasoned travel experts. Each trip is a finely-tuned symphony of culture, history, and natural beauty.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Our Customers' Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What Our Fans Say About Us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Home;
