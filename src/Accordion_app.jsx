import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Accordion_app = () => {
  const [activeBox, setActiveBox] = useState(0);

  const toggleBox = (index) => {
    setActiveBox((prevActiveBox) => (prevActiveBox === index ? null : index));
  };

  const handleContentclick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`accordion-box box ${activeBox === 0 ? "active" : ""}`}
        onClick={() => toggleBox(0)}
      >
        <div className="box-head">
          <h3>Was ist UI/UX Design?</h3>
          <div className="icon">
            <i
              className={`bx ${activeBox === 0 ? "bx bx-minus" : "bx bx-plus"}`}
            ></i>
          </div>
        </div>
        <div className="box-text" onClick={handleContentclick}>
          <p>
            UI steht für "User Interface", was die Schnittstelle bezeichnet,
            über die ein Benutzer mit einer Software interagiert. UX steht für
            "User Experience", was sich auf das Gesamterlebnis eines Benutzers
            bezieht, während er eine Software verwendet. UI/UX Design umfasst
            die Gestaltung von Interfaces, die sowohl ansprechend als auch
            benutzerfreundlich sind.
          </p>
        </div>
      </div>

      <div
        className={`accordion-box box ${activeBox === 1 ? "active" : ""}`}
        onClick={() => toggleBox(1)}
      >
        <div className="box-head">
          <h3>
            Was ist der Unterschied zwischen einer Webseite und einer App?
          </h3>
          <div className="icon">
            <i
              className={`bx ${activeBox === 1 ? "bx bx-minus" : "bx bx-plus"}`}
            ></i>
          </div>
        </div>
        <div className="box-text" onClick={handleContentclick}>
          <p>
            UI steht für "User Interface", was die Schnittstelle bezeichnet,
            über die ein Benutzer mit einer Software interagiert. UX steht für
            "User Experience", was sich auf das Gesamterlebnis eines Benutzers
            bezieht, während er eine Software verwendet. UI/UX Design umfasst
            die Gestaltung von Interfaces, die sowohl ansprechend als auch
            benutzerfreundlich sind.
          </p>
        </div>
      </div>

      <div
        className={`accordion-box box ${activeBox === 2 ? "active" : ""}`}
        onClick={() => toggleBox(2)}
      >
        <div className="box-head">
          <h3>Was ist SEO?</h3>
          <div className="icon">
            <i
              className={`bx ${activeBox === 2 ? "bx bx-minus" : "bx bx-plus"}`}
            ></i>
          </div>
        </div>
        <div className="box-text" onClick={handleContentclick}>
          <p>
            UI steht für "User Interface", was die Schnittstelle bezeichnet,
            über die ein Benutzer mit einer Software interagiert. UX steht für
            "User Experience", was sich auf das Gesamterlebnis eines Benutzers
            bezieht, während er eine Software verwendet. UI/UX Design umfasst
            die Gestaltung von Interfaces, die sowohl ansprechend als auch
            benutzerfreundlich sind.
          </p>
        </div>
      </div>

      <div
        className={`accordion-box box ${activeBox === 3 ? "active" : ""}`}
        onClick={() => toggleBox(3)}
      >
        <div className="box-head">
          <h3>Was sind die wichtigsten Elemente von SEO?</h3>
          <div className="icon">
            <i
              className={`bx ${activeBox === 3 ? "bx bx-minus" : "bx bx-plus"}`}
            ></i>
          </div>
        </div>
        <div className="box-text" onClick={handleContentclick}>
          <p>
            UI steht für "User Interface", was die Schnittstelle bezeichnet,
            über die ein Benutzer mit einer Software interagiert. UX steht für
            "User Experience", was sich auf das Gesamterlebnis eines Benutzers
            bezieht, während er eine Software verwendet. UI/UX Design umfasst
            die Gestaltung von Interfaces, die sowohl ansprechend als auch
            benutzerfreundlich sind.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion_app;
