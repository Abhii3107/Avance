// Wrapper.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./G2.css";

const DotMenu = () => (
  <span className="rb-dot-menu" aria-label="more" />
);

const CategoryItem = ({ label, active = false }) => (
  <NavItem>
    <NavLink href="#" className={`rb-cat ${active ? "active" : ""}`}>
      <span className="rb-cat-icon">
        {/* Placeholder icon circle; replace with inline SVG if needed */}
        <span className="rb-icon-dot" />
      </span>
      <span className="rb-cat-label">{label}</span>
    </NavLink>
  </NavItem>
);

export default function G2() {
  return (
    <Container fluid className="rb-hero">
      <Row className="justify-content-center">
        <Col xl="8" lg="9" md="10">
          <Card className="rb-hero-card">
            <CardBody className="text-center">
              <h1 className="rb-title">RiskBirbal Facilitates</h1>

              <div className="rb-subline">
                <span className="rb-badge rb-badge-primary">
                  A Fantastic Way to
                </span>
                <span className="rb-badge rb-badge-secondary">
                  Buy Insurance
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Overlapping panel */}
      <Row className="justify-content-center mt-n4">
        <Col xl="7" lg="8" md="10">
          <Card className="rb-panel">
            <div className="rb-panel-tag">
              Let’s plan your insurance online
            </div>
            <CardBody>
              <Nav pills className="rb-categories" justified>
                <CategoryItem label="car" active />
                <CategoryItem label="Bike" />
                <CategoryItem label="Health" />
                <CategoryItem label="Home" />
                <CategoryItem label="Termlife" />
                <NavItem className="rb-more">
                  <NavLink href="#" className="rb-cat">
                    <DotMenu />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
