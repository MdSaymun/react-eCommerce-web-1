import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="section_footer py-20 text-white bg-gray-700">
      <div className="section md:container footer_center">
        <Row>
          <Col md={4} className="pb-4 lg:pb-0">
            <div className="box-address">
              <h3 className="text-2xl mb-3">My Store</h3>
              <div className="phone py-2 px-2 mb-3 xl:w-1/2 md:w-3/4 w-1/3 rounded-sm border">
                <FaPhone />
                <div className="to-gray-400">1-800-312-2121</div>
              </div>
              <p className="text-sm text-gray-400">555 California str, Suite 100</p>
              <p className="text-sm text-gray-400">San Francisco, CA 27403</p>
            </div>
          </Col>
          <Col md={8} className="pb-4 lg:pb-0">
            <div className="footer-links text-gray-300 text-sm">
              <div className="link">
                <h3 className="mb-3">Our Menu</h3>
                <div className="link-menu">Home</div>
                <div className="link-menu">About</div>
                <div className="link-menu">Contact</div>
                <div className="link-menu">Checkout</div>
              </div>
              <div className="page">
                <h3 className="mb-3"> Pages</h3>
                <p className="link-page">About</p>
                <div className="link-page">Blog</div>
                <div className="link-page">Blog Page</div>
                <div className="link-page">Post</div>
                <div className="link-page">Wishlist</div>
              </div>
              <div className="help">
                <h3 className="mb-3">How can we Help</h3>
                <p>Terms and Condition</p>
                <p>Privecy and Cookie policy</p>
                <p>FAQ</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyright-msg-social-link my-3">
          <div className="copyrght-msg text-gray-300 text-sm">Copyright 2021 My Store made with ❤ by Unicoder</div>
          <div className="social-icons flex items-center ">
            <FaFacebook className="mx-3" />
            <FaInstagram className="mx-3" />
            <FaTwitter className="mx-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
