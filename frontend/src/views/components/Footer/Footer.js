// Footer.jsx
import React from "react";
import { Container, Button, Input } from "reactstrap";
import "./Footer.css";

import Phone from "../../assests/Footer/Phone.png";
import Mail from "../../assests/Footer/Mail.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        {/* Brand Title */}
        <h2 className="brand-title">Riskbirbal Insurance Brokers</h2>

        {/* Top grid: 5 columns */}
        <div className="links-grid">
          {/* Retail Insurance */}
          <div className="col-block">
            <h3 className="col-heading">Retail Insurance</h3>
            <a href="#" className="link-item">Private Car Insurance</a>
            <a href="#" className="link-item">PCV Insurance</a>
            <a href="#" className="link-item">GCV Insurance</a>
            <a href="#" className="link-item">Health Insurance</a>
            <a href="#" className="link-item">Travel Insurance</a>
            <a href="#" className="link-item">Home Insurance</a>
          </div>

          {/* Corporate Insurance */}
          <div className="col-block">
            <h3 className="col-heading">Corporate Insurance</h3>
            <a href="#" className="link-item">Fire Insurance</a>
            <a href="#" className="link-item">Marine Insurance</a>
            <a href="#" className="link-item">Liability Insurance</a>
            <a href="#" className="link-item">Engineering Insurance</a>
            <a href="#" className="link-item">Group Insurance</a>
            <a href="#" className="link-item">Cyber Insurance</a>
          </div>

          {/* Important Links */}
          <div className="col-block">
            <h3 className="col-heading">Important Links</h3>
            <a href="#" className="link-item">About Us</a>
            <a href="#" className="link-item">Achievements</a>
            <a href="#" className="link-item">Claims &amp; Services</a>
            <a href="#" className="link-item">Careers</a>
            <a href="#" className="link-item">Contact</a>
            <a href="#" className="link-item">FAQ’s</a>
          </div>

          {/* Important Documents */}
          <div className="col-block">
            <h3 className="col-heading">Important Documents</h3>
            <a href="#" className="link-item">Privacy Policy</a>
            <a href="#" className="link-item">Disclaimer</a>
            <a href="#" className="link-item">Grievances</a>
            <a href="#" className="link-item">Terms of Service</a>
            <a href="#" className="link-item">Blogs</a>
            <a href="#" className="link-item">Gallery</a>
          </div>

          {/* Newsletter */}
          <div className="newsletter-block">
            <h3 className="col-heading">Sign-up for Newsletter</h3>
            <div className="muted">Stay Updated!</div>
            <Input
              className="email-input"
              placeholder="Enter Email Address"
              type="email"
              aria-label="Email address"
            />
            <Button className="subscribe-btn" aria-label="Subscribe">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Separator with pill label */}
        <div className="sep-wrap">
          <div className="sep-line" />
          <div className="sep-pill">
            <span>Reach us</span>
          </div>
        </div>

        {/* Bottom grid: 4 columns */}
        <div className="bottom-grid">
          {/* Office */}
          <div className="bottom-block">
            <div className="bottom-title">Regd &amp; Corp Office:</div>
            <div className="bottom-text">
              302, DDA Building No. 2, Janakpuri District Centre, New Delhi, 110058.
            </div>
          </div>

          {/* Contact */}
          <div className="bottom-block">
            <div className="bottom-title with-icon">
              Contact Us
              <img className="inline-icon" alt="Phone" src={Phone} />
            </div>
            <div className="bottom-text">+011-45521738</div>
          </div>

          {/* Mail */}
          <div className="bottom-block">
            <div className="bottom-title with-icon">
              Mail Id
              <img className="inline-icon" alt="Mail" src={Mail} />
            </div>
            <div className="bottom-text">info@riskbirbal.com</div>
          </div>

          {/* Social */}
          <div className="bottom-block social-block">
            <div className="bottom-title">Social Media Links</div>
            <div className="social-row">
              <a className="icon-btn" href="#" aria-label="Facebook">
                <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/facebook-f.svg" alt="Facebook" />
              </a>
              <a className="icon-btn" href="#" aria-label="X">
                <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/x-twitter.svg" alt="X" />
              </a>
              <a className="icon-btn" href="#" aria-label="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/instagram.svg" alt="Instagram" />
              </a>
              <a className="icon-btn" href="#" aria-label="LinkedIn">
                <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/linkedin-in.svg" alt="LinkedIn" />
              </a>
              <a className="icon-btn" href="#" aria-label="YouTube">
                <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/brands/youtube.svg" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

        {/* Registration line */}
        <p className="reg-line">
          This site is owned and operated by RiskBirbal Insurance Brokers Pvt. Ltd. IRDA Reg. No.896,
          CIN: U67100DL2022PTC407258, valid till 30-04-2026.
        </p>

        {/* Copyright */}
        <div className="copy-strip">
          <span>Copyright © 2023</span>
          <span>Riskbirbal Insurance Brokers Pvt Ltd</span>
          <span>|&nbsp;&nbsp;All Rights Reserved.</span>
        </div>
      </Container>
    </footer>
  );
}
