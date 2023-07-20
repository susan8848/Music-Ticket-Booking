import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aImage from "../../assets/images/a.jpg";
import bImage from "../../assets/images/b.jpg";
import cImage from "../../assets/images/c.jpg";
import "./style.css";

export default class MusicSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="music-slider">
        <Slider {...settings}>
          <div className="slider-image">
            <img src={aImage} alt="Example" />
            <div className="slider-content">
              <h3>Kathmandu</h3>
              <p>
                <b>
                  Lets roll Angeles. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptatem expedita inventore
                </b>
              </p>
            </div>
          </div>

          <div className="slider-image">
            <img src={bImage} alt="Example" />
            <div className="slider-content">
              <h3>Pokhara</h3>
              <p>
                <b>
                  Lets roll Angeles. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptatem expedita inventore
                </b>
              </p>
            </div>
          </div>

          <div className="slider-image">
            <img src={cImage} alt="Example" />
            <div className="slider-content">
              <h3>Humla</h3>
              <p>
                <b>
                  Lets roll Angeles. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptatem expedita inventore
                </b>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

