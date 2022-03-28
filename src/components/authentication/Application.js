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
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import AuthBackground from "../AuthBackground";

// Component responsible for the gathering of user info for invite and event purposes via an application

export default function Application() {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  let [isBlocking, setIsBlocking] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function userSubmit(data) {
    setIsBlocking(false);
    try {
      setError("");
      setLoading(true);
      console.log(currentUser.uid)
      console.log(data)
      await setDoc(doc(db, "users", currentUser.uid), data)
      history.push("/applicationTwo");
    } catch {
      setError("Application failed to send!");
    }
    setLoading(false);
  }

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  return (
    <div className="application-background">
      <Prompt
        when={isBlocking}
        message="You must send your application for changes to be saved. Are you sure you want to leave?"
      />
      <AuthBackground>
        <Container className="main-holder d-flex justify-content-center align-items-center">
          <Container style={{ paddingTop: "3em", paddingBottom: "5em" }}>
            <Row>
              <Col></Col>
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <h2 className="text-center mb-xs-3 mb-sm-5">
                      {" "}
                      SpartaHack 2022 Application
                      <h5>Page 1 of 3</h5>{" "}
                    </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit(userSubmit)}>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              First Name <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ex. Jane"
                              {...register("applicantFirstName")}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Last Name <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ex. Doe"
                              {...register("applicantLastName")}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Date of Birth{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="date"
                              {...register("dateOfBirth")}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Level of Study{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Select
                              {...register("levelOfStudy")}
                              aria-label="Default select example"
                            >
                              <option defaultValue={"Select"}>
                                Select
                              </option>
                              <option value="Middle School">
                                Middle School
                              </option>
                              <option value="High School">High School</option>
                              <option value="Undergraduation / Bachelors">Undergraduation / Bachelors</option>
                              <option value="Graduation / Masters">
                                Graduation / Masters
                              </option>
                              <option value="PhD / Doctorate">
                                PhD / Doctorate
                              </option>
                              <option value="Post Doctorate">
                                Post Doctorate
                              </option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              School <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              {...register("school")}
                              type="text"
                              placeholder="Ex. Michigan State University"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {" "}
                              Graduation Date{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="date"
                              {...register("expectedGradDate")}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Major <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              {...register("major")}
                              type="text"
                              placeholder="Ex. Computer Science"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Travel Origin{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              {...register("travelOrigin")}
                              type="text"
                              placeholder="Ex. East Lansing, MI"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {" "}
                              Hackathons Attended{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              {...register("hackathonsAttended")}
                              type="text"
                              placeholder="Ex. 2"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Country of Residence{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              {...register("countryOfResidence")}
                              type="text"
                              placeholder="Ex. USA"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <Form.Group className="mb-3">
                            <Form.Label>LinkedIn (Optional) </Form.Label>
                            <Form.Control
                              {...register("linkedin")}
                              type="text"
                              placeholder="Ex. https://www.linkedin.com/user"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}></Col>
                      </Row>
                      <Button
                        disabled={loading}
                        className="w-100 mt-1 mb-3"
                        type="submit"
                      >
                        Step 2
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
