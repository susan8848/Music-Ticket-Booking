import Carousel from "./Carousel";
import aImage from "../../assets/images/a.jpg";
import bImage from "../../assets/images/b.jpg";
import cImage from "../../assets/images/c.jpg";
import "./style.css";

const MusicSlider = () => {
  const slides = [
    {
      title: "Kathmandu",
      description:
        "Lets roll Angeles. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem expedita inventore",
      imageSrc: aImage,
    },
    {
      title: "Pokhara",
      description:
        "Lets roll Angeles. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem expedita inventore",
      imageSrc: bImage,
    },
    {
      title: "Humla",
      description:
        "Lets roll Angeles. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem expedita inventore",
      imageSrc: cImage,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="music-slider">
      <Carousel settings={settings}>
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
      </Carousel>
    </div>
  );
};

export default MusicSlider;
