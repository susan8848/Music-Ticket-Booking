/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = ({ settings, children }) => {
  console.log(settings);
  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;

