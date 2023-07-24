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

  return (
    <div className="music-slider">
      <Carousel slides={slides} />
    </div>
  );
};

export default MusicSlider;
