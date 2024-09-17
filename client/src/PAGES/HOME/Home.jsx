import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import "./Home.css";
function Home() {
  // Array of images for the slideshow
  const slideImages = [image1, image2, image3];
  return (
    <div className="home">
      <div className="slide-container">
        <Slide>
          {slideImages.map((image, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  height: "95vh",
                  Width: "100%",
                  marginTop: "9rem",
                }}
              >
                {/* Optional: Add a caption or any other content inside the slide */}
                <div className="herocard">
                  <h2>GET A COURSE AND BUILD YOUR CAREER</h2>
                  <h4>Expand your horizons with learning that’s worldwide from $12.99.</h4>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      hhvhv
    </div>
  );
}

export default Home;
