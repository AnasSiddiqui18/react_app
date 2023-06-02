import React, { useState } from "react";

const AccordionApp = () => {
  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (index) => {
    setActiveBox((prevActiveBox) => (prevActiveBox === index ? null : index));
  };

  const handleContentclick = (e) => {
    e.stopPropagation(); //? this function is added to stop the text inside of the accordion to close the accordion.
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div
          className={`box ${activeBox === 0 ? "active" : ""}`}
          onClick={() => toggleBox(0)}
        >
          <div className="box-head">
            Item 1
            <div className="icon">
              <i
                className={`bx ${activeBox === 0 ? "bx-minus" : "bx-plus"}`}
              ></i>
            </div>
          </div>
          <div className="box-text" onClick={handleContentclick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            saepe quam. Impedit harum ullam nemo incidunt laborum nesciunt
            eligendi veritatis reprehenderit adipisci, illo enim in repellendus
            asperiores odio iusto quisquam! Lorem ipsum dolor sit, amet
            consectetur adipisicing.
          </div>
        </div>
        <div
          className={`box ${activeBox === 1 ? "active" : ""}`}
          onClick={() => toggleBox(1)}
        >
          <div className="box-head">
            Item 2
            <div className="icon">
              <i
                className={`bx ${activeBox === 1 ? "bx-minus" : "bx-plus"}`}
              ></i>
            </div>
          </div>
          <div className="box-text" onClick={handleContentclick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            saepe quam. Impedit harum ullam nemo incidunt laborum nesciunt
            eligendi veritatis reprehenderit adipisci, illo enim in repellendus
            asperiores odio iusto quisquam! Lorem ipsum dolor sit, amet
            consectetur adipisicing.
          </div>
        </div>
        <div
          className={`box ${activeBox === 2 ? "active" : ""}`}
          onClick={() => toggleBox(2)}
        >
          <div className="box-head">
            Item 3
            <div className="icon">
              <i
                className={`bx ${activeBox === 2 ? "bx-minus" : "bx-plus"}`}
              ></i>
            </div>
          </div>
          <div className="box-text" onClick={handleContentclick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            saepe quam. Impedit harum ullam nemo incidunt laborum nesciunt
            eligendi veritatis reprehenderit adipisci, illo enim in repellendus
            asperiores odio iusto quisquam! Lorem ipsum dolor sit, amet
            consectetur adipisicing.
          </div>
        </div>
        <div
          className={`box ${activeBox === 3 ? "active" : ""}`}
          onClick={() => toggleBox(3)}
        >
          <div className="box-head">
            Item 4
            <div className="icon">
              <i
                className={`bx  ${activeBox === 3 ? "bx-minus" : "bx-plus"}`}
              ></i>
            </div>
          </div>
          <div className="box-text" onClick={handleContentclick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            saepe quam. Impedit harum ullam nemo incidunt laborum nesciunt
            eligendi veritatis reprehenderit adipisci, illo enim in repellendus
            asperiores odio iusto quisquam! Lorem ipsum dolor sit, amet
            consectetur adipisicing.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionApp;
