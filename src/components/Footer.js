import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="section_footer py-20 text-white bg-gray-700">
      <div className="section footer_center">
        <Row>
          <Col md={4}>
            <div className="box-address">
              <h3>My Store</h3>
              <div className="phone py-2 px-3 ">
                <FaPhone className="pr-" />
                <div>1-800-312-2121</div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="footer-links">
              <div className="link">
                <h3>Our Menu</h3>
                <div className="link-menu">Home</div>
                <div className="link-menu">About</div>
                <div className="link-menu">Contact</div>
                <div className="link-menu">Home</div>
                <div className="link-menu">Home</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
