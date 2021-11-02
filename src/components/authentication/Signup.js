import React, { useRef, useState } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import MSUBackground from "../MSUBackground";
// import NavigationBar from "../NavigationBar";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  // const nameRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    // Check if the passwords are the same

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Entered passwords are not a match.");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value
        // nameRef.current.value
      );
      history.push("/application");
    } catch {
      setError("Account creation failed");
    }
    setLoading(false);
  }

  return (
    <div>
      <MSUBackground>
        <CenteredContainer>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-3"> Sign Up </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmationRef}
                    required
                  />
                </Form.Group>
                {/* <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" ref={nameRef} required />
            </Form.Group> */}
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
            <div className="text-center w-100 mt-2 pb-3">
              Aldready have an account? <Link to="/login"> Log In </Link>
            </div>
          </Card>
        </CenteredContainer>
      </MSUBackground>
    </div>
  );
}
