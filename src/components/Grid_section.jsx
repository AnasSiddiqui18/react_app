import React from "react";
import Pink_vector from "./Pink_vector";
import White_vector from "./White_vector";

const Grid_section = () => {
  return (
    <div className="grid-section">
      <div className="container">
        <div className="grid-parent">
          <div className="slide-text margin-top">
            <h2>
              Kunden <span>Erfahrungen</span>
            </h2>
            <Pink_vector className="pink-vector  pink-vector_2" />
            <White_vector className="white-vector white-vector_2" />
          </div>
          <p>
            In der heutigen digitalen Welt ist es entscheidend, eine starke
            Online-Präsenz zu haben. Eine Digitalagentur kann dabei helfen, eine
            erfolgreiche digitale Strategie zu entwickeln und umzusetzen. Digage
            ist eine Digitalagentur, die sich auf UI/UX, SEO, App-Design und
            -Entwicklung sowie die Erstellung von Webseiten spezialisiert hat.
            In diesem Artikel werden vier Kundenbewertungen über die
            Dienstleistungen von Digage vorgestellt.
          </p>
        </div>
        <div className="box-parent">
          <div className="boxes">
            <div className="box grid-box grid-box-1">
              <h3>Professionelle Beratung und kreative Umsetzung</h3>
              <p>
                Ich war auf der Suche nach einer Agentur, die mir bei der
                Erstellung einer Webseite für mein Unternehmen helfen konnte.
                Digage wurde mir von einem Freund empfohlen und ich bin sehr
                zufrieden mit ihrer Arbeit. Sie haben sich viel Zeit genommen,
                um meine Bedürfnisse und Wünsche zu verstehen und haben mir dann
                eine professionelle Beratung gegeben. Ihre kreative Umsetzung
                hat meine Erwartungen übertroffen und ich bin begeistert von dem
                Ergebnis. Die Zusammenarbeit mit Digage war sehr angenehm und
                ich kann sie nur weiterempfehlen.
              </p>
              <div className="tape-image-1">
                <img src="/public/images/tape_vector.png" alt="#" />
              </div>
            </div>

            <div className="box grid-box grid-box-2">
              <h3>Beeindruckendes UI/UX Design</h3>
              <p>
                Ich habe Digage beauftragt, eine App für mein Unternehmen zu
                entwerfen und zu entwickeln. Das UI/UX-Design, das sie
                entwickelt haben, ist beeindruckend und die App funktioniert
                einwandfrei. Ich war besonders beeindruckt von ihrer Fähigkeit,
                meine Ideen und Wünsche in die App-Designs zu integrieren. Die
                Zusammenarbeit mit Digage war sehr angenehm und ich würde sie
                jedem weiterempfehlen, der eine App für sein Unternehmen
                benötigt.
              </p>
              <div className="tape-image-2">
                <img src="/public/images/tape_vector.png" alt="#" />
              </div>
            </div>
          </div>

          <div className="boxes">
            <div className="box grid-box grid-box-3">
              <h3>Effektive SEO-Strategie</h3>
              <p>
                Als kleines Unternehmen war ich auf der Suche nach einer
                Agentur, die mir bei der Verbesserung meines Online-Auftritts
                helfen konnte. Digage hat mir dabei geholfen, meine
                SEO-Strategie zu verbessern und meine Webseite auf die vorderen
                Plätze der Suchergebnisse zu bringen. Ihre professionelle
                Herangehensweise hat sich als äußerst effektiv erwiesen und ich
                habe seitdem mehr Traffic auf meiner Webseite und mehr
                Kundenanfragen erhalten. Ich bin sehr zufrieden mit ihrer Arbeit
                und werde Digage weiterhin für meine digitale Strategie nutzen.
              </p>
              <div className="tape-image-3">
                <img src="/public/images/tape_vector.png" alt="#" />
              </div>
            </div>

            <div className="box grid-box grid-box-4">
              <h3>Zuverlässige App Entwicklung</h3>
              <p>
                Ich habe Digage beauftragt, eine App für mein
                Startup-Unternehmen zu entwickeln. Ich war beeindruckt von ihrer
                Fähigkeit, meine Ideen und Anforderungen in die App zu
                integrieren. Die App ist sehr benutzerfreundlich und
                zuverlässig. Ich habe seit dem Launch der App viele positive
                Rückmeldungen von meinen Kunden erhalten. Ich bin sehr zufrieden
                mit der Arbeit von Digage und würde sie jedem empfehlen, der
                eine zuverlässige App-Entwicklung sucht.
              </p>
              <div className="tape-image-4">
                <img src="/public/images/tape_vector.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid_section;
