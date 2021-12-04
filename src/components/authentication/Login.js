import React, { useRef, useState } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import MSUBackground from "../MSUBackground";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();


    // if s document associated wit the user.uid is present in the users db 
    // Take the user to the dashboard 
    // Else take the user to the application page 

    try {
      setError("");
      setLoading(true);

      // First an foremost log the user into their account       
      await login(emailRef.current.value, passwordRef.current.value);

      // Get the document snapshot of related to the currently signed in user 
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      
      // If a document exists then the person has aldready applied to SH and we can send then to their dash board 
      // Else they still need to make an application so we send them there. 
      if (docSnap.exists()) {
        history.push("/dashboard");
      } else { 
        history.push("/application");
      }

    } catch {
      setError("Failed to login.");
    }
    setLoading(false);
  }

  return (
    <MSUBackground>
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
    </MSUBackground>
  );
}
