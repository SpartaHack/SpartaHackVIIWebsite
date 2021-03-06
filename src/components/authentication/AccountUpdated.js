import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import CenteredContainer from "./CenteredContainer";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthBackground from "../AuthBackground"

// Component responsible for indicating to the user that a sucessful update of their info has occured

export default function AccountUpdated() {
  const history = useHistory();
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function goToDash() {
    history.push("/appdash-loading");
  }

  async function logoutHandler(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
    setLoading(false);
  }

  return (
    <AuthBackground>
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Account Updated! </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button
              disabled={loading}
              className="w-100 mb-3"
              type="submit"
              onClick={goToDash}
            >
              Go to Dashboard
            </Button>
            <div className="text-center w-100 mt-2 ">
              <Button className="mb-3" variant="link" onClick={logoutHandler}>
                Log Out
              </Button>
            </div>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </AuthBackground>
  );
}
