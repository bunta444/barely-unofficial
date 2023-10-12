import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeItem }) => {
  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const hasItemsInCart = cartItems.length > 0;
  const noItemsInCart = cartItems.length === 0;

  const navigate = useNavigate();

  const handleUseNavigate = () => {
    navigate("/checkout");
    window.scrollTo(0, 0);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  const shippingCost = noItemsInCart ? 0 : 10; // Set shipping cost to 0 when there are no items in the cart

  const orderTotal = totalPrice + shippingCost;

  return (
    <Container>
      <p className="display-3 my-3 text-center">Cärt</p>
      <Row>
        <Col lg={8}>
          <Row>
            {hasItemsInCart &&
              cartItems.map((item, index) => (
                <div
                  className="card m-2" // Add position-relative class to enable absolute positioning
                  key={index}
                  sm={5}
                  md={5}
                  lg={3}
                  style={{ width: "20rem" }}
                >
                  {/* Add the X icon with the close button class */}
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    aria-label="Remove"
                    onClick={() => handleRemoveItem(item)}
                  ></button>
                  <p className="mt-3 h5 text-center">
                    Product: {item.product.name}
                  </p>
                  <img
                    src={item.product.image}
                    alt="img"
                    className="card-img-top"
                  />
                  <p className="text-center">Size: {item.size}</p>
                  <p className="text-center">Quantity: {item.quantity}</p>
                  <p className="text-center">
                    Total Price: {item.quantity * item.product.price}
                  </p>
                </div>
              ))}
          </Row>
          {noItemsInCart && (
            <h3
              className="mt-5 text-center lead"
              style={{ marginBottom: "10rem" }}
            >
              NO ITEMS IN CART
            </h3>
          )}
        </Col>
        <Col lg={4}>
          <div
            className="rounded py-3 px-3 mb-3 mx-3"
            style={{ backgroundColor: "#EFEFEF" }}
          >
            <p className="display-6 mb-4">Order Summary</p>
            <p className="h6">Total Price:${totalPrice}</p>
            <p className="h6">Estimated Shipping:${shippingCost}</p>
            <hr />
            <p>Order Total:${orderTotal}</p>
            {hasItemsInCart && (
              <div className="text-center mt-5">
                <Button variant="primary" onClick={handleUseNavigate}>
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
