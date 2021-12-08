import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";
import CenteredContainer from "./CenteredContainer";
import AuthBackground from "../AuthBackground"
// import LoginLoading from "./LoginLoading";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const isMounted = useRef(true); // Initial value _isMounted = true

  useEffect(() => {
    return () => { // ComponentWillUnmount in Class Component
        isMounted.current = false;
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault()

      setError("");
      setLoading(true);

      if (isMounted.current) {

        try {
          await login(emailRef.current.value, passwordRef.current.value);
          history.push("/appdash-loading")
        }catch {
          setError("login failed");
        }
      }

    setLoading(false);
  }

  return (
    <AuthBackground>
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Log In </h2>
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
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="text-center w-100 mt-3">
              <Link to="/forgot-password"> Forgot Password? </Link>
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
