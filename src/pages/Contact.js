import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  let contactInfo = [
    { icon: <FiPhoneCall />, info1: "1-34345-343", info2: "9-344-344-3344" },
    { icon: <FiMail />, info1: "info@gmail.com", info2: "suport@info.com" },
    { icon: <IoLocationOutline />, info1: "555 California str, Suite 100", info2: "San Francisco, CA 94107" },
  ];
  return (
    <div className="section_contact my-20 ">
      <div className="section container">
        <h1 className="text-4xl text-center font-bold my-10 ">Contact</h1>
        <div className="contact-items">
          <Row>
            {contactInfo.map((item) => {
              return (
                <Col md={4}>
                  <div className="box-email text-center mb-4">
                    <div className="text-4xl flex items-center justify-center bg-gray-200 w-20 h-20 rounded-full text-center mb-4 mx-auto">
                      <div>{item.icon}</div>
                    </div>
                    <p className="mb-2">{item.info1}</p>
                    <p>{item.info2}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="contact-form w-1/2 mx-auto mt-10">
          <h3 className="text-center font-bold text-2xl mb-3">Get in touch </h3>
          <p className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form className="w-3/4  mx-auto flex items-start justify-center flex-col">
            <div>
              <label htmlFor="name">Your Name (required) </label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Your Email (required) </label>
              <input type="email" id="email" className="bg-gray-300" />
            </div>
            <div>
              <label htmlFor="msg">Your Message</label>
              <textarea name="msg" id="msg" cols="30" rows="10" className="mb-4" />
            </div>
            <div>
              <button className="bg-gray-700 text-white py-2 px-3 rounded-sm">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
