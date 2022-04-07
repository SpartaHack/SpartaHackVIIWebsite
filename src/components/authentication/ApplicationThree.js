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
import AuthBackground from "../AuthBackground";
import "./ApplicationThree.css";
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
const sendEmail = httpsCallable(functions, "sendEmail");

// Component responsible for the gathering of user info for invite and event purposes via an application
export default function Application() {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
      console.log("hi")
      console.log(data);
      await updateDoc(doc(db, "users", currentUser.uid), data);
      history.push("/submitted-application");
    } catch {
      setError("Application failed to send!");
    }
    sendEmail({
        "id": currentUser.uid,
        "name": "",
        "message": "Email Sent",
        "approval": true
    });
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
                      SpartaHack 2022 Application <h5>Page 3 of 3</h5>
                    </h2>
                    {(errors.mlhCodeOfConductCheck || errors.mlhEventLogisticsInformationCheck) && <Alert variant="danger">Please check the required fields.</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <Form onSubmit={handleSubmit(userSubmit)}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          // required
                          {...register("mlhCodeOfConductCheck", { required: 'Agreement is required'})}
                          type="checkbox"
                          // value="yes"
                          label={
                            <>
                              <span>
                                i. MLH Code of Conduct: "I have read and agree
                                to the{" "}
                                <a href="https://static.mlh.io/docs/mlh-member-event-guidelines.pdf">
                                  MLH Code of Conduct
                                </a>
                                ."
                              </span>
                              <span style={{ color: "red" }}>*</span>
                            </>
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          {...register("mlhEventLogisticsInformationCheck", { required: 'Agreement is required'})}
                          type="checkbox"
                          // value="yes"
                          label={
                            <>
                              <span>
                                ii. Event Logistics Information: “I authorize
                                you to share my application/registration
                                information with Major League Hacking for event
                                administration, ranking, and MLH administration
                                in-line with the{" "}
                                <a href="https://mlh.io/privacy">
                                  MLH Privacy Policy
                                </a>
                                . I further agree to the terms of both the{" "}
                                <a href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions">
                                  MLH Contest Terms and Conditions
                                </a>{" "}
                                and the{" "}
                                <a href="https://mlh.io/privacy">
                                  MLH Privacy Policy
                                </a>
                                .”
                              </span>
                              <span style={{ color: "red" }}>*</span>
                            </>
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          {...register("mlhCommunicationCheck")}
                          // value="yes"
                          type="checkbox"
                          label={
                            <>
                              <span>
                                iii. Communication from MLH: “I authorize MLH to
                                send me pre- and post-event informational
                                emails, which contain free credit and
                                opportunities from their partners."
                              </span>
                            </>
                          }
                        />
                      </Form.Group>

                      <Button
                        disabled={loading}
                        className="w-100 mt-1 mb-3"
                        variant="success"
                        type="submit"
                      >
                        Submit Application!
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
