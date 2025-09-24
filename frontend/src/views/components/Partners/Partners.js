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

function Partners() {
  return (
    <>
      <div className="outer">
        <div className="inner-1"></div>

        <div className="z">
          <div className="inner-2"></div>
        </div>
      </div>

      <Container fluid className="clients-outer-partner">
        <div className="clients-row-partner">
          {imgs.map((src, i) => (
            <div className="client-box-partner" key={i}>
              <img
                src={src}
                alt={`client-${i + 1}`}
                className="client-img-partner"
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Partners;
