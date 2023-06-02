import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="container ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            1150: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            425: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src="/public/images/marketing.png" alt="" />

              <h3>Marketing</h3>
              <p className="box-para">
                Unser Unternehmen bietet ein breites Spektrum an
                Marketing-Services, um Ihre Marke erfolgreich zu präsentieren
                und Ihre Zielgruppe zu erreichen. Wir sind spezialisiert auf
                Social Media Marketing und erstellen maßgeschneiderte
                AD-Kampagnen sowie weitere Marketing-Tools. Unser kreativer
                Ansatz und unsere Expertise helfen Ihnen dabei, Ihre
                Marketingziele zu erreichen und Ihre Geschäftsziele zu
                verwirklichen. Kontaktieren Sie uns noch heute, um Ihre
                individuelle Marketingstrategie zu entwickeln.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box slider-box">
              <img src="/public/images/service.png" alt="" />
              <h3>Contact Center Service</h3>
              <p className="box-para">
                Digage bietet professionelle Kundensupport-Dienstleistungen für
                andere Unternehmen an, bei denen unsere Mitarbeiter als Chatter
                oder Call Center Agenten eingesetzt werden. Wir sind
                spezialisiert darauf, die eingehenden Kundenanfragen effizient
                und effektiv zu bearbeiten und eine positive Kundenerfahrung zu
                gewährleisten. Unsere Mitarbeiter verfügen über umfangreiches
                technisches Know-how und sind in der Lage, die Anforderungen
                unserer Kunden bestmöglich zu erfüllen.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box slider-box">
              <img src="/public/images/ui-designer.png" alt="" />

              <h3>UI/UX Design</h3>
              <p className="box-para">
                Unsere erfahrenen Designer sind auf die Gestaltung von modernen
                und benutzerfreundlichen Interfaces spezialisiert. Wir legen
                großen Wert auf ein gutes User Experience Design, um
                sicherzustellen, dass deine Benutzer sich auf deiner Webseite
                oder App wohl fühlen und eine positive Erfahrung machen.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box slider-box">
              <img src="/public/images/marketing.png" alt="" />

              <h3>Marketing</h3>
              <p className="box-para">
                Unser Unternehmen bietet ein breites Spektrum an
                Marketing-Services, um Ihre Marke erfolgreich zu präsentieren
                und Ihre Zielgruppe zu erreichen. Wir sind spezialisiert auf
                Social Media Marketing und erstellen maßgeschneiderte
                AD-Kampagnen sowie weitere Marketing-Tools. Unser kreativer
                Ansatz und unsere Expertise helfen Ihnen dabei, Ihre
                Marketingziele zu erreichen und Ihre Geschäftsziele zu
                verwirklichen. Kontaktieren Sie uns noch heute, um Ihre
                individuelle Marketingstrategie zu entwickeln.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box slider-box ">
              <img src="/public/images/service.png" alt="" />

              <h3>Contact Center Service</h3>

              <p className="box-para">
                Digage bietet professionelle Kundensupport-Dienstleistungen für
                andere Unternehmen an, bei denen unsere Mitarbeiter als Chatter
                oder Call Center Agenten eingesetzt werden. Wir sind
                spezialisiert darauf, die eingehenden Kundenanfragen effizient
                und effektiv zu bearbeiten und eine positive Kundenerfahrung zu
                gewährleisten. Unsere Mitarbeiter verfügen über umfangreiches
                technisches Know-how und sind in der Lage, die Anforderungen
                unserer Kunden bestmöglich zu erfüllen.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box slider-box">
              <img src="/public/images/ui-designer.png" alt="" />

              <h3>UI/UX Design</h3>

              <p className="box-para">
                Unsere erfahrenen Designer sind auf die Gestaltung von modernen
                und benutzerfreundlichen Interfaces spezialisiert. Wir legen
                großen Wert auf ein gutes User Experience Design, um
                sicherzustellen, dass deine Benutzer sich auf deiner Webseite
                oder App wohl fühlen und eine positive Erfahrung machen.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
