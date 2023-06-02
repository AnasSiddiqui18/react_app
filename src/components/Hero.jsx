import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <div className="hero-information">
          <h1 className="h1-font">
            Digage - Deine <span>Digitale</span> Lösung
          </h1>
          <p>
            Willkommen bei Digage, Ihrer kreativen Digitalagentur! Unser Name
            leitet sich vom englischen Wort "Digitalagency" ab, aber wir sind
            mehr als nur eine klassische Agentur. Wir bieten kreative und
            maßgeschneiderte Lösungen für jedes IT-Anliegen. Egal ob Sie eine
            neue Webseite benötigen, eine App entwickeln lassen wollen oder eine
            umfassende SEO-Strategie benötigen, wir haben das Know-how und die
            Kreativität, um Ihre Anforderungen zu erfüllen. Bei uns steht die
            Kundenzufriedenheit an erster Stelle, und wir arbeiten hart daran,
            Ihre Erwartungen zu übertreffen. Lassen Sie uns gemeinsam Ihre
            digitale Präsenz auf das nächste Level heben um Ihre Geschäftsziele
            zu erreichen!
          </p>
          <Button className="button_primary" />
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
