import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container
      className="text-center"
      style={{ marginTop: "10rem", marginBottom: "10rem" }}
    >
      <h1 className="display-5">THANK YOU</h1>
      <h2 className="lead">
        confirmation email has been sent to you with your shipping details
      </h2>
      <Button className="mt-5" onClick={handleButtonClick}>
        {"Back to home:)"}
      </Button>
    </Container>
  );
};

export default ThankYouPage;
