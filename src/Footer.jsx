import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="line"></div>
        <div className="footer-content">
          <div className="logo footer-logo">
            <img src="/public/images/logo_light.png" alt="" />
          </div>
          <div className="center-content">
            <p>Datenschutz-Bestimmungen</p>
            <p>Geschäftsbedingungen</p>
          </div>
          <div className="icons">
            <img
              src="./public/images/facebook.png"
              className="facebook_icon"
              alt="#"
            />
            <img
              src="./public/images/insta.png"
              className="insta_icon"
              alt="#"
            />
            <img
              src="./public/images/twitter.png"
              className="twitter_icon"
              alt="#"
            />
          </div>
        </div>
        <div className="last-line">
          <p>Urheberrechte © 2023, Digage - Digitale Agentur</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
