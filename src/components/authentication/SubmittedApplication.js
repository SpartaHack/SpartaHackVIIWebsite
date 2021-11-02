import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import CenteredContainer from "./CenteredContainer";
import { useHistory } from "react-router-dom";
import MSUBackground from "../MSUBackground";
// import { useAuth } from "../contexts/AuthContext";

export default function SubmittedApplicaiton() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      history.push("/dashboard");
    } catch {
      setError("Failed to get users dashboard");
    }
    setLoading(false);
  }

  return (
    <MSUBackground>
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Application Submitted! </h2>
            <Alert variant="success">
              "Be on the lookout for email approval."
            </Alert>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              onClick={handleSubmit}
            >
              Go to Dashboard
            </Button>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </MSUBackground>
  );
}
