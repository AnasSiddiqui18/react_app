import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isMenuOpen, SetisMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetisMenuOpen(!isMenuOpen);
  };

  const logoImage = isMenuOpen
    ? "images/logo_dark.png"
    : "images/logo_light.png";

  const toggleImage = isMenuOpen
    ? "images/menu-toggle-dark.png"
    : "images/menu-toggle.png";

  useEffect(() => {
    document.body.style.overflowX = isMenuOpen ? "hidden" : "hidden";
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logoImage} alt="" />
        </div>

        <div className={`toggle`} onClick={toggleMenu}>
          <img src={toggleImage} alt="" />
        </div>
      </div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <div className="menu-content">
          <div className="first">
            <h3>Home</h3>
            <h3>Leistungen</h3>
            <h3>Projekte</h3>
            <h3>Kontakt</h3>
          </div>
          <div className="second">
            <div className="second_one">
              <p>BÜROS</p>
              <a href="#">Frankfurt</a>
              <p className="big_para">
                Große Gallusstraße 16-18 60312 Frankfurt am Main Deutschland
              </p>
            </div>
            <div className="second_two">
              <a href="#">Berlin</a>
              <p className="big_para">Mühlenstr. 60 10243 Berlin Deutschland</p>
            </div>
          </div>
          <div className="third">
            <p>KONTAKT</p>
            <a href="#">Umut Deniz</a>
            <p className="big_para">Gründer und Geschäftsführer umut@kiai.de</p>
          </div>
          <div className="fourth">
            <p>RECHTLICHES</p>
            <a href="#">Impressum</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
