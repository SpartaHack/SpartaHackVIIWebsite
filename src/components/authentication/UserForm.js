import React, { useRef, useState } from "react";
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
//import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useForm } from "react-hook-form";
// import CenteredContainer from "./CenteredContainer";
import MSUBackground from "../MSUBackground";

export default function UserForm({ preLoadedValues }) {
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
    // deleteUserAccount,
  } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // async function handleDelete(event) {
  //   event.preventDefault();

  //   // window.confirm message
  //   if (window.confirm("Are you sure you want to delete your account?")) {
  //     try {
  //       setError("");
  //       setLoading(true);
  //       await deleteDoc(doc(db, "users", currentUser.uid));
  //       await deleteUserAccount();
  //       history.push("/");
  //     } catch {
  //       setError("Failed to delete account");
  //     }
  //     setLoading(false);
  //   }
  // }

  // function userSubmit(event) {
  //   event.preventDefault();
  function userSubmit(data) {
    // Check if the passwords are the same
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Entered passwords are not a match.");
    }

    const promises = [];
    setLoading(true);
    setError("");

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

  async function handleLogout(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);

      history.push("/login");
    } catch {
      setError("Failed to logout");
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
          <div className="w-100" style={{ maxWidth: "1200px", paddingBottom: "3em", paddingTop: "3em"}}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4"> Dashboard </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(userSubmit)}>
                  <Row>
                    <Col md = {4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
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
                        <Form.Label>Name</Form.Label>
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
                        <Form.Label>Date of Birth</Form.Label>
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
                        <Form.Label>Education Level</Form.Label>
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
                        <Form.Label>University</Form.Label>
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
                        <Form.Label>Expected Graduation Date</Form.Label>
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
                        <Form.Label>Major</Form.Label>
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
                        <Form.Label>Travel Origin</Form.Label>
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
                        <Form.Label>No. Hackathons Attended</Form.Label>
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
                        <Form.Label>LinkedIn Account (Optional) </Form.Label>
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
                        <Form.Label>Race </Form.Label>
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
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Statement</Form.Label>
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
                  {/* <Button
                    disabled={loading}
                    className="w-100 bg-danger"
                    type="submit"
                    onClick={handleDelete}
                  >
                    Delete Account
                  </Button> */}
                  <Button
                    // variant="link"
                    className="w-100 bg-primary"
                    onClick={handleLogout}
                  >
                    Log Out
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
