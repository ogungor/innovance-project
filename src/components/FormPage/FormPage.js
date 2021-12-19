import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Banner from "../Banner/Banner";

const FormPage = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()


  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field]){
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    const newErrors = checkFormHasAnyErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Thank you for your feedback!");
      navigate("/");
    }
  };

  const checkInputFullOfSpaces = (inputField) => {
    return inputField.replace(/\s/g, "").length < 1;
  };

  const checkFormHasAnyErrors = () => {
    const { name, sport, rating, comment } = form;
    const errors = {};

    if (!name || checkInputFullOfSpaces(name)) {
      errors.name = "Name can not be blank !";
    }
    if (!sport) {
      errors.sport = "Select your favorite sport !";
    }
    if (!rating) {
      errors.rating = "Please rate us!";
    } else if (rating > 10 || rating < 1) {
      errors.rating = "Rate us between 1 and 10";
    }
    if (!comment || checkInputFullOfSpaces(comment)) {
      errors.comment = "Please leave us a comment!";
    }

    return errors;
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#8e8989",
    fontWeight: "500",
    marginBottom: ".25rem",
  };

  return (
    <div>
      <Banner />
      <Row className="justify-content-center py-4 text-center px-4 px-md-0">
        <Col md={6}>Here is basic form page made with React for fun!</Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="App d-flex flex-column align-items-center">
            <Form onSubmit={handleSubmit} className="w-75 w-md-50">
              <Form.Group className="mb-4">
                <Form.Label style={labelStyle}>Your Fullname</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setField("name", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label style={labelStyle}>
                  Your favorite sport
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setField("sport", e.target.value)}
                  isInvalid={!!errors.sport}
                >
                  <option value=""></option>
                  <option value="chicken parm">Football</option>
                  <option value="BLT">Basketball</option>
                  <option value="steak">Table Tennis</option>
                  <option value="salad">Volleyball</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.sport}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label style={labelStyle}>Rating</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setField("rating", e.target.value)}
                  isInvalid={!!errors.rating}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.rating}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label style={labelStyle}>Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setField("comment", e.target.value)}
                  isInvalid={!!errors.comment}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.comment}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="outline-secondary">
                Send Form
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FormPage;
