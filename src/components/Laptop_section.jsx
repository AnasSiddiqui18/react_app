import React from "react";
import Button from "./Button";

const Laptop_section = () => {
  return (
    <div className="laptop-section">
      <div className="container">
        <div className="lap-parent">
          <div className="lap-content">
            <h3>
              Wir hoffen, dass du einen besseren Einblick in unsere
              Dienstleistungen bekommen hast.
            </h3>
            <p>
              Wenn du Fragen hast oder uns beauftragen möchtest, dann
              kontaktiere uns gerne. Wir freuen uns darauf, mit dir
              zusammenzuarbeiten und deine digitale Lösung zu kreieren!
            </p>
            <Button className="button_primary button-secondary" />
          </div>
          <div className="lap-image">
            <img src="/public/images/laptop-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop_section;
