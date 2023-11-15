import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    imgUrl: customizationImg,
    title: "customizaton",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
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
