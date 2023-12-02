import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maletourist from "./../../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get the latest travel news and exclusive deals!</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Join our community of travelers and adventurers to receive personalized recommendations, early bird offers, and insider tips directly to your inbox.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maletourist} alt="Male Tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
