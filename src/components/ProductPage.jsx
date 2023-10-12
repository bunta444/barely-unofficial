import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { products } from "../constants";

const ProductPage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSizeInCart, setSelectedSizeInCart] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const [selectedQuantityInCart, setSelectedQuantityInCart] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Fetch product details based on the productId
    const fetchedProduct = products.find(
      (item) => item.id === parseInt(productId)
    );
    setProduct(fetchedProduct);
  }, [productId]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const [buttonText, setButtonText] = useState("Sold Out");
  // const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    const cartItem = {
      product,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    addToCart(cartItem);
    setShowAlert(true);
    setButtonText("Added!");
    // setButtonDisabled(true);
    setSelectedSizeInCart(selectedSize);
    setSelectedQuantityInCart(selectedQuantity);
    console.log(
      "Product added to cart:",
      product,
      "Size:",
      selectedSize,
      "Quantity:",
      selectedQuantity
    );

    setTimeout(() => {
      setButtonText("Add to Cart");
      setShowAlert(false);
      setSelectedSizeInCart("");
      // setButtonDisabled(false);
    }, 1000);
  };

  if (!product) {
    return <div>Item Not Found</div>;
  }

  const isSelectFormVisible = productId !== "12";
  // const isButtonEnabled = productId === "12";

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Link to="/products">
        <Button>Back</Button>
      </Link>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          {isSelectFormVisible && (
            <Form>
              <Form.Group controlId="sizeDropdown">
                <Form.Label>Select Size:</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedSize}
                  onChange={handleSizeChange}
                  className="mb-3"
                >
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">X-Large</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="dropdown">
                <Form.Label>Quanity:</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedQuantity}
                  onChange={handleQuantityChange}
                  className="mb-3"
                  disabled
                >
                  <option value="">Sold Out</option>
                </Form.Control>
              </Form.Group>
            </Form>
          )}
          <Button
            className="mb-3"
            variant="primary"
            onClick={handleAddToCart}
            disabled
            // ={isButtonDisabled || (!selectedSize && !isButtonEnabled)}
          >
            {buttonText}
          </Button>
          {showAlert && (
            <Alert variant="success" className="mt-2">
              Size: {selectedSizeInCart} || Quantity:{selectedQuantityInCart}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
