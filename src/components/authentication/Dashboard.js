import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Card,
  Alert,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useForm } from "react-hook-form";
// import AuthBackground from "../AuthBackground"
import AddResumeDashboard from "./AddResumeDashboard";

// Component responsible for displaying the current information SpartaHack has on the user
// User is able to update their information from this component as well 

export default function Dashboard({ preLoadedValues, resumeOnFileOgName, resumeOnFileDownloadLink, resumeOnFileButtonColor, resumeOnFileButtonDisable }) {

  const { register, handleSubmit } = useForm({
    defaultValues: preLoadedValues,
  });
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const {
    currentUser,
    updateProfileEmail,
    updateProfilePassword,
    logout
  } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const isMounted = useRef(true); // Initial value _isMounted = true

  useEffect(() => {
    return () => { // ComponentWillUnmount in Class Component
        isMounted.current = false;
    }
  }, []);

  function userSubmit(data) {

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Entered passwords are not a match.");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if(isMounted.current){
      promises.push(updateDoc(doc(db, "users", currentUser.uid), data));

      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateProfileEmail(emailRef.current.value));
      }
  
      if (passwordRef.current.value) {
        promises.push(updateProfilePassword(passwordRef.current.value));
      }
  
      Promise.all(promises)
        .then(() => {
          history.push("/account-updated");
        })
        .catch(() => {
          setError("Failed to update account");
        })
        .finally(() => {
          setLoading(false);
        });
    }

  }

  async function handleLogout() {
    setError("");
    
    try {
      setLoading(true);
      await logout()
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
        <Container
          className="main-holder d-flex justify-content-center align-items-center"
        >
          <Container style={{paddingTop: "3em", paddingBottom: "3em"}}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4"> Dashboard </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(userSubmit)}>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          type="email"
                          ref={emailRef}
                          required
                          defaultValue={currentUser.email}
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          ref={passwordRef}
                          placeholder="leave blank to keep same"
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4} >
                      <Form.Group className="mb-3">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                          type="password"
                          ref={passwordConfirmationRef}
                          placeholder="leave blank to keep same"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="applicantName"
                          placeholder="Ex. Jane Doe"
                          {...register("applicantName")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          name="dateOfBirth"
                          type="date"
                          {...register("dateOfBirth")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Education Level <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="educationLevel"
                          placeholder="Ex. Undergraduate"
                          {...register("educationLevel")}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>University <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          {...register("university")}
                          type="text"
                          name="university"
                          placeholder="Ex. Michigan State University"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label> Graduation Date <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          name="expectedGradDate"
                          type="date"
                          {...register("expectedGradDate")}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Major <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          name="major"
                          {...register("major")}
                          type="text"
                          placeholder="Ex. Computer Science"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Travel Origin <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          name="travelOrigin"
                          {...register("travelOrigin")}
                          type="text"
                          placeholder="Ex. East Lansing, MI"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label> Hackathons Attended <span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control
                          name="hackathonsAttended"
                          {...register("hackathonsAttended")}
                          type="text"
                          placeholder="Ex. 2"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>LinkedIn (Optional) </Form.Label>
                        <Form.Control
                          name="linkedin"
                          {...register("linkedin")}
                          type="text"
                          placeholder="Ex. https://www.linkedin.com/user"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Race  </Form.Label>
                        <Form.Select
                          name="race"
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
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          name="gender"
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
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          name="phone"
                          {...register("phone")}
                          type="text"
                          placeholder="Ex. 847-111-2222"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <AddResumeDashboard 
                      resumeUploading = {setLoading} 
                      resumeOnFileOgName = {resumeOnFileOgName} 
                      resumeOnFileDownloadLink = {resumeOnFileDownloadLink} 
                      resumeOnFileButtonColor = {resumeOnFileButtonColor} 
                      resumeOnFileButtonDisable ={resumeOnFileButtonDisable} 
                    />
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Statement <span style={{color: "red"}}>*</span></Form.Label>
                    <Form.Control
                      name="statement"
                      as="textarea"
                      rows={3}
                      {...register("statement")}
                      type="text"
                      placeholder="Tell us a bit more about you."
                    />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mb-3 bg-success"
                    type="submit"
                  >
                    Update
                  </Button>
                  <Button
                    className="w-100 bg-primary"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Container>
    </div>
  );
}
