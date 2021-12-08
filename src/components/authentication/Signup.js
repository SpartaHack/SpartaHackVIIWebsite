import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import AuthBackground from "../AuthBackground";


export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const isMounted = useRef(true); // Initial value _isMounted = true

  useEffect(() => {
    return () => { // ComponentWillUnmount in Class Component
        isMounted.current = false;
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Entered passwords are not a match.");
    }

    if (isMounted.current) {
      try {
        setError("");
        setLoading(true);
        await signUp(
          emailRef.current.value,
          passwordRef.current.value
        );
        history.push("/application");
      } catch {
        setError("Account creation failed. Login if you have signed up previously.");
      }

    }

    setLoading(false);
  }

  return (
    <div className="signup-background">
      <AuthBackground>
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
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
            <div className="text-center w-100 mt-2 pb-3">
            Already have an account? <Link to="/login"> Log In </Link>
            </div>
          </Card>
        </CenteredContainer>
      </AuthBackground>
    </div>
  );
}
