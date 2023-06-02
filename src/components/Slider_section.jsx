import React from "react";
import Slider from "../Slider";
import Pink_vector from "./Pink_vector";
import White_vector from "./White_vector";

const Slider_section = () => {
  return (
    <>
      <div className="Slide_Section">
        <div className="container">
          <div className="slide-img">
            <img src="/public/images/Vector-1-component.png" alt="" />
          </div>

          <div className="slide-text slider-text">
            <div className="slide-content">
              <h2>
                Was Wir <span>Anbieten</span>
              </h2>
              <Pink_vector className="pink-vector" />
              <White_vector className="white-vector" />
            </div>
          </div>
        </div>
        <div className="slider-parent">
          <div className="slider-content">
            <div className="background-image" />
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider_section;
