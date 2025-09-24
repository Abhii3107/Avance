// src/pages/Desktop.jsx
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
  NavLink
} from "reactstrap";

import GroupWrapper from "./components/GroupWrapper/GroupWrapper";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";

import "./Desktop.css";

export const Desktop = () => {
  return (
    <Container fluid className="desktop p-0" data-model-id="88:114">
      {/* Top hero with layered shapes */}
      <section className="hero position-relative">
        <img
          className="rectangle-6 img-fluid w-100"
          alt="Rectangle"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/rectangle-69.svg"
        />

        <div className="rectangle-7" />
        <img
          className="rectangle-8"
          alt="Rectangle"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/rectangle-79.svg"
        />
        <div className="rectangle-9" />
        <img
          className="rectangle-10"
          alt="Rectangle"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/rectangle-67.svg"
        />

        {/* <HeaderNav /> */}

        {/* Headline pair */}
        <div className="text-wrapper-61">RiskBirbal Facilitates</div>
        <div className="text-wrapper-62">RiskBirbal Facilitates</div>

        <p className="text-wrapper-63">Let’s plan your insurance online</p>

        {/* Category icon row (kept as assets to match design) */}
        <div className="rectangle-11" />
        <img
          className="asset"
          alt="Asset"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/asset-8.png"
        />
        <img
          className="asset-2"
          alt="Asset"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/asset-9.png"
        />
        <img
          className="asset-3"
          alt="Asset"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/asset-10.png"
        />
        <img
          className="asset-4"
          alt="Asset"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/asset-11.png"
        />
        <img
          className="asset-5"
          alt="Asset"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/asset-12.png"
        />

        <div className="rectangle-12" />
        <div className="rectangle-13" />
        <div className="rectangle-14" />
        <div className="rectangle-15" />

        {/* Three-dot menu */}
        <div className="frame">
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
        </div>

        {/* Category labels */}
        <div className="text-wrapper-53">car</div>
        <div className="text-wrapper-54">Bike</div>
        <div className="text-wrapper-55">Health</div>
        <div className="text-wrapper-56">Home</div>
        <div className="text-wrapper-57">Termlife</div>
      </section>

      {/* Category pills as Reactstrap Nav for responsiveness */}
      <section className="py-3">
        <Row className="justify-content-center">
          <Col xl="8" lg="9" md="10" sm="11">
            <Card className="border-0 bg-transparent">
              <CardBody className="p-0">
                <Nav pills justified className="rb-categories">
                  <NavItem>
                    <NavLink href="#" active>
                      car
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Bike</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Health</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Termlife</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Partners strip */}
      <section className="partners position-relative">
        <img
          className="rectangle-23"
          alt="Rectangle"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/rectangle-59.svg"
        />
        <div className="text-wrapper-60">Our Clients</div>
        <div className="text-wrapper-58">40+ Insurance partners</div>

        <div className="group-3">
          <img
            className="rectangle-24"
            alt="Rectangle"
            src="https://c.animaapp.com/mfr8k808PpGNxz/img/rectangle-57.svg"
          />
          <div className="text-wrapper-59">Partners</div>
        </div>

        {/* Client tiles row 1 */}
        <div className="rectangle-22" />
        <div className="rectangle-25" />
        <div className="rectangle-26" />
        <div className="rectangle-27" />
        <div className="rectangle-28" />
        <div className="rectangle-29" />
        <div className="rectangle-30" />
        <img
          className="image-2"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-9.png"
        />
        <img
          className="image-3"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-10.png"
        />
        <img
          className="image-4"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-11.png"
        />
        <img
          className="image-5"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-12.png"
        />
        <img
          className="image-6"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-13.png"
        />
        <img
          className="mask-group"
          alt="Mask group"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/mask-group.png"
        />
      </section>

      {/* Secondary client strip */}
      <section className="clients-2 position-relative">
        <div className="rectangle-16" />
        <div className="rectangle-17" />
        <div className="rectangle-18" />
        <div className="rectangle-19" />
        <div className="rectangle-20" />
        <div className="rectangle-21" />
        <div className="rectangle-31" />
        <img
          className="line-2"
          alt="Line"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/line-2.svg"
        />
        <img
          className="image-7"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-16.png"
        />
        <img
          className="image-8"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-17.png"
        />
        <img
          className="image-9"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-18.png"
        />
        <img
          className="image-10"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-20.png"
        />
        <img
          className="image-11"
          alt="Image"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/image-21.png"
        />
        <img
          className="mask-group-2"
          alt="Mask group"
          src="https://c.animaapp.com/mfr8k808PpGNxz/img/mask-group-1.png"
        />
      </section>

      {/* Content groups that existed in the original */}
      <section className="py-4">
        <Row>
          <Col>
            <Group />
          </Col>
        </Row>
        <Row>
          <Col>
            <GroupWrapper />
          </Col>
        </Row>
      </section>

      {/* Footer */}
      <Row className="mt-4">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
