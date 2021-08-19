import React from "react";
import { Col, Row } from "react-bootstrap";
import CountryName from "../components/CountryName";
import { useGlobalContext } from "../utils/context";
const inputInfo = [
  { styles: "company-name", htmlFor: "compayName", type: "text", name: "compayName", id: "compayName", title: "Company Name" },
  { styles: "str-address", htmlFor: "strAddress", type: "text", name: "strAddress", id: "strAddress", title: "Street Address" },
  { styles: "town-city", htmlFor: "town", type: "text", name: "town", id: "town", title: "Town/City" },
  { styles: "phone", htmlFor: "phone", type: "number", name: "phone", id: "phone", title: "Phone" },
  { styles: "email", htmlFor: "email", type: "email", name: "email", id: "email", title: "Email" },
];

const Checkout = () => {
  const { state } = useGlobalContext();
  const { cartData, total } = state;
  return (
    <div className="my-20 section_checkout">
      <div className="section container">
        <h1 className="text-4xl text-center font-bold my-10 ">Checkout</h1>
        <div className="checkout-center">
          <Row>
            <Col md={8}>
              <div className="checkout-form">
                <h3 className="mb-3 font-bold uppercase text-lg ml-3">Billing Details</h3>
                <form className="w-full">
                  <div className="name grid grid-cols-2 ">
                    <div className="first-name">
                      <label htmlFor="fistname">First Name</label>
                      <input type="text" name="fistname" id="firstname" />
                    </div>
                    <div className="last-name">
                      <label htmlFor="fistname">Last Name</label>
                      <input type="text" name="fistname" id="firstname" />
                    </div>
                  </div>
                  <div className="country-name">
                    <CountryName />
                  </div>
                  {inputInfo.map((item) => {
                    const { title, styles, htmlFor, type, name, id } = item;
                    return (
                      <div className={styles}>
                        <label htmlFor={htmlFor}>{title}</label>
                        <input type={type} name={name} id={id} />
                      </div>
                    );
                  })}
                </form>
              </div>
            </Col>
            <Col md={4}>
              <div className="order-info p-5 shadow-sm bg-gray-200 rounded-sm">
                <h3 className="mb-3 text-lg font-bold uppercase">Your Order</h3>
                <div className="order-item-info">
                  <div className="product-subtotal flex justify-between">
                    <div>Product</div>
                    <div>Subtotal</div>
                  </div>
                  <hr className="my-2" />
                  <div className="product-list mb-3 ">
                    {cartData.map((item) => {
                      return (
                        <div className="flex items-center justify-between mb-3">
                          <div className="product-title">
                            {item.title} x {item.amount}
                          </div>
                          <div className="price">{item.price}</div>
                        </div>
                      );
                    })}
                  </div>
                  <hr className="my-2" />
                  <div className="product-subtotal flex justify-between">
                    <div>Subtotal</div>
                    <div>{total}</div>
                  </div>
                  <hr className="my-2" />
                  <div className="product-total flex justify-between">
                    <div className="mb-3">Total</div>
                    <div>{total}</div>
                  </div>
                  <button className="px-4  py-2 rounded-sm mb-3 bg-gray-700 text-white">Place order</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
