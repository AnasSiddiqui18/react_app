import React from "react";
import Pink_vector from "./components/Pink_vector";
import White_vector from "./components/White_vector";
import Purple_vector from "./Purple_vector";

const Form = () => {
  return (
    <div className="form-section">
      <div className="form-content slider-content">
        <div className="background-image">
          <div className="container">
            <div className="form-parent">
              <div className="form-left">
                <div className="slide-text form-text">
                  <h2>
                    Lassen Sie uns
                    <span className="span">Zusammenarbeiten</span>
                  </h2>
                  <Purple_vector className="purple-vector" />
                  <White_vector className="white-vector white-vector-4" />
                  <img
                    src="./public/images/star_little.png"
                    alt="#"
                    className="little-star"
                  />
                </div>
                <img
                  src="./public/images/vector_last.png"
                  className="last-vector"
                  alt="#"
                />
              </div>
              <div className="form-right">
                <div className="form-box">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="phone" placeholder="Phone" />
                  <input type="message" placeholder="Message" />
                  <img
                    src="./public/images/form_vector.png"
                    className="form-vector"
                    alt="#"
                  />
                  <p>
                    Mit dem absenden dieser Nachricht akzeptieren Sie unsere
                    Datenschutzerklärung
                  </p>
                  <a href="#" className="button_primary form-button">
                    Nachricht Senden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Form;
