import React from "react";
import "./service-card.css"; // Make sure this points to the enhanced CSS file

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;
  return (
    <div className="service-card"> {/* Updated class name for the hover effect */}
      <div className="service__img">
        <img src={imgUrl} alt={title} />
      </div>
      <h5 className="service-card-title" data-text={title}>{title}</h5>
      <p className="service-card-description">{desc}</p> {/* Added class for description */}
    </div>
  );
};

export default ServiceCard;
