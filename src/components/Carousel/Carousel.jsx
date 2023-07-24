/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = ({ slides }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="carousel">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-image">
            <img src={slide.imageSrc} className="music-img" alt="Example" />
            <div className="slider-content">
              <h3>{slide.title}</h3>
              <p>
                <b>{slide.description}</b>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

