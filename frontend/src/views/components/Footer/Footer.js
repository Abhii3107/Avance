// Footer.jsx
import React from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
import "./Footer.css";

import Phone from "../../assests/Footer/Phone.png"
import Mail from "../../assests/Footer/Mail.png"

export default function footer() {
  return (
    <footer className="footer">
      <div className="div-2">
        <Container className="container">
          <div className="text-wrapper-9">Riskbirbal Insurance Brokers</div>

          <Row className="row">
            <Col xs="12" className="licenses-d-flex-flex" />

            <Col xs="6" md="2" className="d-flex-flex-column">
              <div className="text-wrapper-10">Important Documents</div>
              <div className="text-wrapper-11">Privacy Policy</div>
              <div className="text-wrapper-12">Disclaimer</div>
              <div className="text-wrapper-13">Grievances</div>
              <div className="text-wrapper-14">Terms of Service</div>
              <div className="text-wrapper-15">Blogs</div>
              <div className="text-wrapper-15">Gallery</div>
            </Col>

            <Col xs="6" md="2" className="d-flex-flex-column-2">
              <div className="text-wrapper-16">Important Links</div>
              <div className="text-wrapper-17">About Us</div>
              <div className="text-wrapper-18">Achievements</div>
              <div className="claims-services">Claims &amp; Services</div>
              <div className="text-wrapper-19">Careers</div>
              <div className="text-wrapper-20">Contact</div>
              <div className="FAQ-s">FAQ's</div>
            </Col>

            <Col xs="6" md="2" className="d-flex-flex-column-3">
              <a
                className="text-wrapper-21"
                // href="https://retail.riskbirbal.com/"
                // rel="noopener noreferrer"
                // target="_blank"

              >
                Private Car Insurance
              </a>
              <div className="text-wrapper-22">PCV Insurance</div>
              <div className="text-wrapper-23">GCV Insurance</div>
              <div className="text-wrapper-24">Health Insurance</div>
              <div className="text-wrapper-25">Travel Insurance</div>
              <div className="text-wrapper-26">Home Insurance</div>
            </Col>

            <Col xs="6" md="2" className="d-flex-flex-column-4">
              <div className="text-wrapper-27">Fire Insurance</div>
              <div className="text-wrapper-28">Marine Insurance</div>
              <div className="text-wrapper-29">Liability Insurance</div>
              <div className="text-wrapper-30">Engineering Insurance</div>
              <div className="text-wrapper-31">Group Insurance</div>
              <div className="text-wrapper-32">Cyber Insurance</div>
            </Col>

            <Col xs="12" md="4" className="form">
              <div className="text-wrapper-33">Sign-up for Newsletter</div>
              <div className="text-wrapper-34">Stay Updated!</div>
              <Button className="button-btn-btn">
                <div className="text-wrapper-35">Subscribe</div>
              </Button>
            </Col>

            <Col xs="6">
              <div className="text-wrapper-36">Corporate Insurance</div>
            </Col>
            <Col xs="6">
              <div className="text-wrapper-37">Retail Insurance</div>
            </Col>
          </Row>
        </Container>

        <p className="regd-corp-office">
          <span className="span">
            Regd &amp; Corp Office: <br />
          </span>
          <span className="text-wrapper-38">
            302, DDA Building No. 2, Janakpuri District Centre, New Delhi,
            110058.
          </span>
        </p>

        <p className="contact-us">
          <span className="span">
            Contact Us <br />
          </span>
          <span className="text-wrapper-38">+011-45521738</span>
        </p>

        <p className="mail-id-info">
          <span className="span">
            Mail Id <br />
          </span>
          <span className="text-wrapper-38">info@riskbirbal.com</span>
        </p>

        <div className="group-2">
          <div className="copyright">
            <div className="rectangle" />
            <div className="text-white-d-inline">
              <div className="text-wrapper-39">Copyright © 2023</div>
              <p className="p">Riskbirbal Insurance Brokers Pvt Ltd</p>
              <div className="all-rights-reserved">
                |&nbsp;&nbsp;All Rights Reserved.
              </div>
            </div>
          </div>

          <div className="seprator-line">
            <div className="rectangle-2" />
            <div className="text-wrapper-40">Reach us</div>
          </div>
        </div>

        <p className="text-wrapper-41">
          This site is owned and operated by RiskBirbal Insurance Brokers Pvt.
          Ltd. IRDA Reg. No.896, CIN: U67100DL2022PTC407258, valid till
          30-04-2026.
        </p>

        <img
          className="phone"
          alt="Phone"
          src={Phone}
        />

        <img
          className="mail"
          alt="Mail"
          src={Mail}
        />

        
        <Input
          className="input"
          placeholder="Enter Email Address"
          type="email"
        />

       <div className="footer-social-media">
  <img
    className="link-facebook"
    alt="Facebook"
    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/facebook-f.svg"
  />
  <img
    className="link-twitter"
    alt="Twitter"
    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/twitter.svg"
  />
  <img
    className="link-instagram"
    alt="Instagram"
    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/instagram.svg"
  />
  <img
    className="link-linkedin"
    alt="LinkedIn"
    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/linkedin-in.svg"
  />

          <div className="text-wrapper-42">Social Media Links</div>
        </div>
      </div>
    </footer>
  );
};
