import React from "react";
import Pink_vector from "./components/Pink_vector";
import White_vector from "./components/White_vector";
import Accordion_app from "./Accordion_app";

const Accordion_section = () => {
  return (
    <div className="accordion-section">
      <div className="container">
        <div className="slide-text">
          <h2>
            Häufig Gestellte <span>Fragen</span>
          </h2>
          <Pink_vector className="pink-vector  pink-vector_3" />
          <White_vector className="white-vector white-vector_3" />
        </div>
        <div className="accordion-content">
          <Accordion_app />
        </div>
      </div>
    </div>
  );
};

export default Accordion_section;
