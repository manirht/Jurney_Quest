import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "Our family vacation was a dream come true, thanks to the seamless planning and 
          incredible destinations. Every detail was taken care of, allowing us to relax and 
          create memories we'll cherish forever."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="testimonial-avatar" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Happy Traveler</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "As a solo traveler, finding adventures that feel safe and exciting can be a challenge, 
          but here I found the perfect balance. The support and experiences have been unmatched."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="testimonial-avatar" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Adventurous Soul</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "The attention to detail and the personalized itineraries made our trip feel like a 
          bespoke experience. It was the perfect blend of adventure and luxury - simply unforgettable."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="testimonial-avatar" />
          <div>
            <h6 className="mb-0 mt-3">Alex Johnson</h6>
            <p>Explorer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "I've been on many tours, but the genuine care and expertise shown by the guides on 
          this journey truly made it stand out. They made sure each of us left with a story to tell."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="testimonial-avatar" />
          <div>
            <h6 className="mb-0 mt-3">Sophia Martinez</h6>
            <p>World Traveler</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
