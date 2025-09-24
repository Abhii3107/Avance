import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./GroupWrapper.css";

const items = [
  { key: "car", label: "car", img: "/assets/GroupWrapper/img/car.png" },
  { key: "bike", label: "Bike", img: "/assets/GroupWrapper/img/bike.png" },
  { key: "health", label: "Health", img: "/assets/GroupWrapper/img/health.png" },
  { key: "home", label: "Home", img: "/assets/GroupWrapper/img/home.png" },
  { key: "termlife", label: "Termlife", img: "/assets/GroupWrapper/img/termlife.png" },
];

const GroupWrapper = () => {
  return (
    <Container className="gw" fluid>
      {/* Title pill */}
      <div className="gw-rail">
        <div className="gw-left" />
        <p className="gw-title">
          <span className="gw-title-left">A Fantastic Way to </span>
          <span className="gw-title-right">Buy Insurance</span>
        </p>
      </div>

      {/* Category strip */}
      <div className="gw-strip">
        <div className="gw-strip-gradient" />
        <div className="gw-strip-band">
          <div className="gw-pill gw-pill-1" />
          <div className="gw-pill gw-pill-2" />
          <div className="gw-pill gw-pill-3" />
          <div className="gw-pill gw-pill-4" />
          <div className="gw-pill gw-pill-5" />

          <Row className="g-0 justify-content-center gw-row">
            {items.map((it) => (
              <Col key={it.key} xs="auto" className="gw-card">
                <div className="gw-card-inner">
                  <img src={it.img} alt={it.label} className="gw-icon" />
                </div>
                <div className="gw-label">{it.label}</div>
              </Col>
            ))}
            <Col xs="auto" className="gw-dots" aria-label="More">
              <span />
              <span />
              <span />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default GroupWrapper;