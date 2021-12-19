import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Form from "react-bootstrap/Form";
import { Row, InputGroup, Button, Image } from "react-bootstrap";
import { Key, At } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import loginImg from "../../images/loginImg.jpg";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);

      //for home page data, you need to have a data calls loginInfo in localStorage. 
      localStorage.setItem("loginInfo", [userName, password]);
      navigate("/");
    }
  };
  return (
    <div>
      <Banner />
      <div className="d-flex">
        <div className="col-6 d-none d-md-block">
          <Image className="login-image vh-100" src={loginImg} />
        </div>
        <div className="d-flex flex-column justify-content-center w-100 align-self-center pt-5 pt-md-0 px-5">
          <div className="text-center">
            <h2>Welcome to Innovance Project</h2>
            <p>You can login the system from this page! Enjoy with it.</p>
          </div>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-3"
          >
            <Row className="mb-3">
              <Form.Group controlId="validationUserName">
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <At />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationPassword">
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <Key />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="outline-secondary" className="px-4">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
