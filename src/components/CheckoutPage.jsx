import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cartItems, clearCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setAddress("");
    clearCart();
    navigate("thankyou");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.product.price * item.quantity),
    0
  );

  // Shipping cost
  const shippingCost = 10;

  // Calculate the order total
  const orderTotal = totalPrice + shippingCost;

  const hasItemsInCart = cartItems.length > 0;

  const isFormValid = name !== "" && email !== "" && address !== "";

  return (
    <Container
      style={{ marginTop: "5rem", backgroundColor: "#EFEFEF" }}
      className="p-5 rounded m-4"
    >
      {hasItemsInCart && (
        <>
          <h2>Checkout</h2>
          <Row>
            <Col md={6}>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: "20rem" }}
                    className="my-2"
                  />
                  <p>Price: {item.product.price}$</p>
                  <hr />
                </div>
              ))}
              <p>
                Shipping: {shippingCost}$
                <br />
                Total Price: {orderTotal}$
              </p>
            </Col>
            <Col>
              <p>Total Price: {orderTotal}$</p>
              <hr />
              <h4>Customer Information</h4>
              <Form onSubmit={handleCheckout} id="info">
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={address}
                    onChange={handleAddressChange}
                    rows={3}
                    required
                  />
                </Form.Group>
              </Form>
              <h4 className="mt-4">Payment Method</h4>
              <form id="money">
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="expiryDate" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      name="expiryDate"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      name="cvv"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardHolder" className="form-label">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolder"
                    name="cardHolder"
                  />
                </div>
              </form>
              <Button
                className="mb-3"
                variant="primary"
                type="submit"
                disabled={!isFormValid}
                onClick={handleCheckout}
              >
                Place Order
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
