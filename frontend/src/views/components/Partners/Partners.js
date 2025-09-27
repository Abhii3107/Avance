import React from "react";
import { Container } from "reactstrap";
import "./partner.css";

import chola from "../../assests/Partners/chola.png";
import care from "../../assests/Partners/care.png";
import aditya from "../../assests/Partners/aditya.png";
import iffo from "../../assests/Partners/iffo.png";
import national from "../../assests/Partners/national.png";
import sbi from "../../assests/Partners/sbi.png";

const imgs = [chola, care, aditya, iffo, national, sbi];

export default function Partners() {
  return (
    <Container className="partners-section">
      <div className="outer mirror">
        <div className="overlay">
          <div className="inner-two" />
        </div>
        <div className="inner-one">
          <span className="clients-text">partners</span>
        </div>
      </div>

      <Container fluid className="clients-outer-partner">
        <span className="partner-text">40+ Insurance partners</span>
        <div className="clients-row-partner">
          {imgs.map((src, i) => (
            <div className="client-box-partner" key={i}>
              <img
                src={src}
                alt={`partner-${i + 1}`}
                className="client-img-partner"
              />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}
