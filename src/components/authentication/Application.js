import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import MSUBackground from "../MSUBackground";

export default function Application() {
  const { register, handleSubmit } = useForm();
  const { uploadApplication } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function userSubmit(data) {
    try {
      setError("");
      setLoading(true);
      // await uploadApplication(nameRef.current.value);
      await uploadApplication(data);
      history.push("/submitted-application");
    } catch {
      setError("Application failed to send!");
    }
    setLoading(false);
  }

  return (
    <div>
      <MSUBackground>
        <Container
          className="main-holder d-flex justify-content-center align-items-center"
          style={{ minHeight: "94vh" }}
        >
          <div className="w-100" style={{ maxWidth: "1200px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-5">
                  {" "}
                  SpartaHack 2022 Application{" "}
                </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(userSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex. Jane Doe"
                          {...register("applicantName")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          {...register("dateOfBirth")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Education Level</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex. Undergraduate"
                          {...register("educationLevel")}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>University</Form.Label>
                        <Form.Control
                          {...register("university")}
                          type="text"
                          placeholder="Ex. Michigan State University"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Expected Graduation Date</Form.Label>
                        <Form.Control
                          type="date"
                          {...register("expectedGradDate")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Major</Form.Label>
                        <Form.Control
                          {...register("major")}
                          type="text"
                          placeholder="Ex. Computer Science"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Travel Origin</Form.Label>
                        <Form.Control
                          {...register("travelOrigin")}
                          type="text"
                          placeholder="Ex. East Lansing, MI"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>No. Hackathons Attended</Form.Label>
                        <Form.Control
                          {...register("hackathonsAttended")}
                          type="text"
                          placeholder="Ex. 2"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>LinkedIn Account (Optional) </Form.Label>
                        <Form.Control
                          {...register("linkedin")}
                          type="text"
                          placeholder="Ex. https://www.linkedin.com/user"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Race </Form.Label>
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
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
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
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          {...register("phone")}
                          type="text"
                          placeholder="Ex. 847-111-2222"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Statement</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("statement")}
                      type="text"
                      placeholder="Tell us a bit more about you."
                    />
                  </Form.Group>

                  <Button
                    disabled={loading}
                    className="w-100 mt-4"
                    type="submit"
                  >
                    Send Application
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </MSUBackground>
    </div>
  );
}
