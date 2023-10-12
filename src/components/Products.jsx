import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { images } from "../constants";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container id="products">
      <p className="display-3 my-3 text-center">Prödücts</p>
      <Row className="text-center">
        {images.map((image, index) => (
          <Col key={index} sm={5} md={5} lg={3} className="mb-5">
            <Link to={`/${index + 1}`}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="img-thumbnail"
                style={{
                  width: "17rem",
                  border: "none",
                }}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
