import aImage from "../../assets/images/a.jpg";
import bImage from "../../assets/images/b.jpg";

import cImage from "../../assets/images/c.jpg";

import "./style.css";

const bands = () => {
  const band_banner = [
    {
      title: "The band",
      sub_title: "we love music",
      description:
        "Lorem ipsum dolor sit amet conum dolor sit amet consectetur adipisicium dolor sit amet consectetur adipisicing elit. Deserunt vero tenetur sapiente aut pariatur invenng elit. Deserunt vero tenetur sapiente aut pariatur invensectetur adipium dolor sit amet consectetur adipisicing elit. Deserunt vero tenetur sapiente aut pariatur invensicing elit. Deserunt vero teum dolor sit amet cum dolor sit amet consectetur adipisicing elit. Deserunt vero tenetur sapiente aut pariatur invenonsectetur adipisicing elit. Deserunt vero tenetur sapiente aut pariatur invennetur sapiente aut pariatur inventore, blanditiis labore eos beatae dolor esse, impedit ullam recusandae, libero mollitia. Nobis quis perferendis perspiciatis.,",
      images: [aImage, bImage, cImage],
      headings: ["XYZ", "ABC", "SDE"],
    },
  ];

  return (
    <>
      <div className="band">
        {band_banner.map((band, index) => (
          <div key={index}>
            <div className="band-content">
              <h3>{band.title}</h3>
              <i>{band.sub_title}</i>
              <p>{band.description}</p>
            </div>
            <div className="images-music">
              {band.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <h3>{band.headings[imgIndex]}</h3>
                  <img
                    key={imgIndex}
                    src={image}
                    className="band-img"
                    alt={`Example ${imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default bands;

