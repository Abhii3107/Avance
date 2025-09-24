// src/components/Clients/Clients.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./clients.css";

// Replace these with real assets from ../../assets/client/...
// Example imports exactly as requested:
import chft from "../../assests/client/chft.png";
import tgs from "../../assests/client/tgs.png";
import nike from "../../assests/client/nike.png";
import abia from "../../assests/client/abia.png";
import crest from "../../assests/client/crest.png";
// Optional decorative mask image (right edge), or keep CSS-only fade:
// import railMask from "../../assets/client/rail-mask.png";

const logos = [
  { src: chft, alt: "CHETAN Tours and Travel" },
  { src: tgs, alt: "TGS Techno Global Strategies" },
  { src: nike, alt: "Nike" },
  { src: abia, alt: "ABIA Home Accessories Living" },
  { src: crest, alt: "Education Crest" },
];

export default function Clients() {
  return (
    <section className="clients-section">
      <Container fluid="lg" className="clients-wrap">
        {/* <div className="clients-header">
          <h2 className="clients-title">Our Clients</h2>
          <div className="partners-tab">
            <span>Partners</span>
          </div>
        </div> */}

        <div className="clients-rail">
          <Row className="g-3 g-md-4 align-items-stretch">
            {logos.map((item, idx) => (
              <Col key={idx} xs="6" sm="4" md="2" lg="2" className="d-flex">
                <Card className="client-card flex-fill">
                  <CardBody className="d-flex align-items-center justify-content-center ">
                    <img className="client-logo" src={item.src} alt={item.alt} />
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Optional decorative mask on the right, else CSS gradient will handle fade */}
          {/* <img className="rail-mask-img" src={railMask} alt="" aria-hidden="true" /> */}
          <div className="rail-mask-fade" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
