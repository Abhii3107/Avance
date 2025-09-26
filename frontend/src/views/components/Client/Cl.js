import React from "react";
import { Container } from "reactstrap";
import "./cl.css";
import chft from "../../assests/client/chft.png";
import tgs from "../../assests/client/tgs.png";
import nike from "../../assests/client/nike.png";
import abia from "../../assests/client/abia.png";
import crest from "../../assests/client/crest.png";
import mob from "../../assests/client/mob.png";

const imgs = [chft, tgs, nike, abia, crest, mob];

export default function Cl() {
  return (
    <>
      <Container>
        <div className="outer-box">
          <div className="inner-1">
            <span className="clients-text">our clients</span>
          </div>
          <div className="z">
            <div className="inner-2"></div>
          </div>
        </div>
        <Container fluid className="clients-outer">
          <div className="clients-row">
            {imgs.map((src, i) => (
              <div className="client-box" key={i}>
                <img src={src} alt={`client-${i + 1}`} className="client-img" />
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}
