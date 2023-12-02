import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: weatherImg,
    title: "Real-time Weather Forecasts",
    desc: "Stay prepared with accurate weather updates to ensure perfect travel experiences, come rain or shine.",
  },
  {
    imgUrl: guideImg,
    title: "Expert Tour Guides",
    desc: "Explore with local experts who bring stories to life, offer insider insights, and personalize your journey.",
  },
  {
    imgUrl: customizationImg,
    title: "Tailored Itineraries",
    desc: "Craft the perfect trip that caters to your tastes, preferences, and dreams, for an adventure that’s uniquely yours.",
  },
];

const ServiceList = () => {
  return (
    <>
      {ServicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
