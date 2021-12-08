import React, { useRef, useState } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import AuthBackground from "../AuthBackground"

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check you inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <AuthBackground>
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Password Reset </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Rest Password
              </Button>
            </Form>
            <div className="text-center w-100 mt-3">
              <Link to="/login"> Login </Link>
            </div>
          </Card.Body>
          <div className="text-center w-100 mt-2 pb-3">
            Still need to sign up? <Link to="/signup"> Sign Up</Link>
          </div>
        </Card>
      </CenteredContainer>
    </AuthBackground>
  );
}
