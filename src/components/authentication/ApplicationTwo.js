import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Card,
  Container,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Prompt } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import AuthBackground from "../AuthBackground"
import AddResume from "./AddResume";

// Component responsible for the gathering of user info for invite and event purposes via an application 

export default function Application() {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  let [isBlocking, setIsBlocking] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function userSubmit(data) {
    setIsBlocking(false)
    try {
      setError("");
      setLoading(true);
      await updateDoc(doc(db, "users", currentUser.uid), data)
      history.push("/applicationThree");
    } catch {
      setError("Application failed to send!");
    }
    setLoading(false);
  }

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  const alertUser = e => {
    e.preventDefault()
    e.returnValue = ''
  }

  return (
    <div className="application-background">
      <Prompt
        when={isBlocking}
        message="You must send your application for changes to be saved. Are you sure you want to leave?"
      />
      <AuthBackground>
        <Container
          className="main-holder d-flex justify-content-center align-items-center"
        >
          <Container style={{paddingTop: "3em", paddingBottom: "5em"}}>
            <Row>
              <Col></Col>
              <Col xs = {12}>
                <Card> 
                <Card.Body>
                  <h2 className="text-center mb-xs-3 mb-sm-5">
                    {" "}
                    SpartaHack 2022 Application{" "}
                    <h5>Page 2 of 3</h5>
                  </h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit(userSubmit)}>
                    <Row>
                      <Col md = {4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Race <span style={{color: "red"}}>*</span></Form.Label>
                          <Form.Select
                            {...register("race")}
                            aria-label="Default select example"
                          >
                            <option value="Prefer not to Answer">
                              Prefer not to Answer
                            </option>
                            <option value="Asian or Pacific Islander">
                              Asian or Pacific Islander
                            </option>
                            <option value="Black or African American">
                              Black or African American
                            </option>
                            <option value="Hispanic or Latino">
                              Hispanic or Latino
                            </option>
                            <option value="Native American or Alaskan Native">
                              Native American or Alaskan Native
                            </option>
                            <option value="White or Caucasian">
                              White or Caucasian
                            </option>
                            <option value="Multiracial or Biracial">
                              Multiracial or Biracial
                            </option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md = {4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Gender <span style={{color: "red"}}>*</span></Form.Label>
                          <Form.Select
                            {...register("gender")}
                            aria-label="Default select example"
                          >
                            <option value="Prefer not to Answer">
                              Prefer not to Answer
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-Binary">Non-Binary</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md = {4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone <span style={{color: "red"}}>*</span></Form.Label>
                          <Form.Control
                            {...register("phone")}
                            type="text"
                            placeholder="Ex. 847-111-2222"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>


                    <AddResume resumeUploading={setLoading}/>

                    <Form.Group className="mb-3">
                      <Form.Label>Statement <span style={{color: "red"}}>*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        {...register("statement")}
                        type="text"
                        placeholder="Succinctly describe your reasons for applying to SpartaHack."
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      className="w-100 mt-1 mb-3"
                      type="submit"
                    >
                      Step 3
                    </Button>
                  </Form>
                </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </AuthBackground>
    </div>
  );
}
