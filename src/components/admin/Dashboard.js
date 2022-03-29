import { Card, Table, Container, Button, Modal } from "react-bootstrap";
import AuthBackground from "../AuthBackground"
import { db } from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useToasts } from "react-toast-notifications";

const functions = getFunctions();
const sendEmail = httpsCallable(functions, "sendEmail");

class User {
    // constructor with name, birthday, education, graddate
    constructor(name, birthday, education, university, graddate, gender, hackathons, linkedin, major, phone, race, statement, origin, country, approved, id) {
        this.name = name;
        this.birthday = birthday;
        this.education = education;
        this.uni = university;
        this.graddate = graddate;
        this.gender = gender;
        this.hackathons = hackathons;
        this.linkedin = linkedin;
        this.major = major;
        this.phone = phone;
        this.race = race;
        this.statement = statement;
        this.origin = origin;
        this.country = country;
        this.approved = approved;
        this.id = id;
    }
    
    toString() {
        return this.name + ", " + this.birthday + ", " + this.education + ", " + this.uni;
    }
}

export default function Dashboard(){
    const [Users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [curUser, setCurUser] = useState(new User());

    useEffect(() => {
        async function fetchData(){
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = [];
        
            querySnapshot.forEach((doc) => {
                // create user object from doc.data() and push to Users array
                let name = "";
                if (doc.data().applicantName){
                    name = doc.data().applicantName
                } else if (doc.data().applicantFirstName && doc.data().applicantLastName){
                    name = doc.data().applicantFirstName + " " + doc.data().applicantLastName;
                } else {
                    return;
                }
                const dateOfBirth = doc.data().dateOfBirth;
                const educationLevel = doc.data().educationLevel ? doc.data().educationLevel : doc.data().levelOfStudy;
                const university = doc.data().university ? doc.data().university : doc.data().school;
                const graddate = doc.data().expectedGradDate;
                const gender = doc.data().gender;
                const hackathons = doc.data().hackathonsAttended;
                const linkedin = doc.data().linkedin;
                const major = doc.data().major;
                const phone = doc.data().phone;
                const race = doc.data().race;
                const statement = doc.data().statement;
                const origin = doc.data().travelOrigin;
                const country = doc.data().countryOfResidence;
                const approved = doc.data().approved ? doc.data().approved : false;
                const id = doc.id;
                const new_user = new User(name, dateOfBirth, educationLevel, university, graddate, gender, hackathons, linkedin, major, phone, race, statement, origin, country, approved, id);
                users.push(new_user);
            })
            setUsers(users);
        }
        fetchData();
    }, []);

    const { addToast } = useToasts();

    const triggerEmail = (user) => {

        console.log("hello")
        sendEmail({
            "id": user.id,
            "name": user.name,
            "message": "Surprisingly, this seems to be working."
        }).then(function(result) {
            console.log(result);
            if (result.data.status === 200){
                addToast("Email sent successfully to " + user.name, { appearance: 'success', autoDismiss: false});
            } else{
                addToast("Error sending email to " + user.name, { appearance: 'error', autoDismiss: false});
            }
        }).catch(function(error) {
            console.log(error);
        });
    }

    const showModal = (user) => {
        setCurUser(user);
        setShow(true);
    }

    return (
        <AuthBackground>
            <Container className="main-holder d-flex justify-content-center align-items-center">
                <Container style={{paddingTop: "3em", paddingBottom: "5em"}}>
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Full Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{curUser.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{curUser.uni} | {curUser.education}</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Birthday: </strong>{curUser.birthday}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Graduation Date: </strong>{curUser.graddate}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Gender: </strong>{curUser.gender}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Major: </strong>{curUser.major}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Origin and Country: </strong>{curUser.origin} | {curUser.country}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Race: </strong>{curUser.race}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Phone: </strong>{curUser.phone}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>LinkedIn: </strong><a href={curUser.linkedin}>{curUser.linkedin}</a>
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Hackathons Attended: </strong>{curUser.hackathons}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Statement: </strong>{curUser.statement}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                Close
                            </Button>
                            <Button variant="success" onClick={() => triggerEmail(curUser)} disabled={curUser.approved}>
                                {curUser.approved ? "Already Approved" : "Approve"}
                            </Button>
                            {!curUser.approved && 
                                <Button variant="danger" disabled={true}>
                                    Reject
                                </Button>
                            }
                        </Modal.Footer>
                    </Modal>
                    <Card>
                        <h1>Admin Panel</h1>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Birthday</th>
                                    <th>Education</th>
                                    <th>University</th>
                                    <th>Full Profile</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{Users.indexOf(user) + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.birthday}</td>
                                            <td>{user.education}</td>
                                            <td>{user.uni}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => showModal(user)}>View</Button>
                                            </td>
                                            <td>
                                                <Button variant="success" onClick={() => triggerEmail(user)} disabled={user.approved}>
                                                    {user.approved ? "Already Approved" : "Approve"}
                                                </Button>
                                                {!user.approved && 
                                                    <Button variant="danger" disabled={true}>
                                                        Reject
                                                    </Button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Card>
                </Container>
            </Container>
        </AuthBackground>
    );
}