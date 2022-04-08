import { Card, Table, Container, Button, Modal, FormControl, Badge } from "react-bootstrap";
import AuthBackground from "../AuthBackground"
import { db } from "../../firebase";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useToasts } from "react-toast-notifications";

const functions = getFunctions();
const sendEmail = httpsCallable(functions, "sendEmail");

class User {
    // constructor with name, birthday, education, graddate
    constructor(name, birthday, education, university, graddate, gender, hackathons, linkedin, major, phone, race, statement, origin, country, approved, rejected, checked, confirmationEmail, id) {
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
        this.rejected = rejected;
        this.checked = checked;
        this.confirmationEmail = confirmationEmail;
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
    const [permanentUsers, setPermanentUsers] = useState([]);

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
                const rejected = doc.data().rejected ? doc.data().rejected : false;
                const checked = doc.data().checked ? doc.data().checked : false;
                const confirmationEmail = doc.data().confirmationEmail ? doc.data().confirmationEmail : false;
                const id = doc.id;
                const new_user = new User(name, dateOfBirth, educationLevel, university, graddate, gender, hackathons, linkedin, major, phone, race, statement, origin, country, approved, rejected, checked, confirmationEmail, id);
                users.push(new_user);
            })
            setUsers(users);
            setPermanentUsers(users);
        }
        fetchData();
    }, []);

    const { addToast } = useToasts();

    const triggerEmail = (e, user, approval) => {
        console.log("hello")
        sendEmail({
            "id": user.id,
            "name": user.name,
            "message": "Surprisingly, this seems to be working.",
            "approval": approval
        }).then(function(result) {
            console.log(result);
            if (result.data.status === 200){
                addToast("Email sent successfully to " + user.name, { appearance: 'success', autoDismiss: false});
            } else{
                addToast("Error sending email to " + user.name, { appearance: 'error', autoDismiss: false});
            }
        }).catch(function(error) {
            addToast("Error sending email to " + user.name, { appearance: 'error', autoDismiss: false});
            console.log(error);
        });
        e.currentTarget.disabled = true;
    }

    const showModal = (user) => {
        setCurUser(user);
        setShow(true);
    }

    const checkIn = (e, user) => {
        updateDoc(doc(db, "users", user.id), {
            "checked": true
        });
        addToast("Checked in " + user.name, { appearance: 'info', autoDismiss: false});
        e.currentTarget.disabled = true;
    }

    // show only rows where user name matches search
    const search = (searchTerm) => {
        if (searchTerm === ""){
            setUsers(permanentUsers);
        } else {
            const filteredUsers = permanentUsers.filter((user) => {
                return user.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setUsers(filteredUsers);
        }
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
                            {!curUser.rejected &&
                                <Button variant="success" onClick={(e) => triggerEmail(e, curUser, true)} disabled={curUser.approved}>
                                    {curUser.approved ? "Already Approved" : "Approve"}
                                </Button>
                            }
                            {!curUser.approved && 
                                <Button variant="danger" onClick={(e) => triggerEmail(e, curUser, false)} disabled={curUser.rejected}>
                                    {curUser.rejected ? "User Rejected" : "Reject"}
                                </Button>
                            }
                        </Modal.Footer>
                    </Modal>
                    <Card>
                        <h1>Admin Panel</h1>
                        <FormControl className="search-bar" onChange={(e) => search(e.target.value)} placeholder="Search by name"/>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th></th>
                                    <th>Birthday</th>
                                    <th>Education</th>
                                    <th>University</th>
                                    <th>Full Profile</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{Users.indexOf(user) + 1}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                {
                                                    // use full days to determine if user is less than 18 years old
                                                    (new Date().getTime() - new Date(user.birthday).getTime()) / (1000 * 3600 * 24) < 18 * 365
                                                    ? <Badge bg="danger">Minor</Badge>
                                                    : <Badge bg="secondary">Adult</Badge>
                                                }
                                            </td>
                                            <td>{user.birthday}</td>
                                            <td>{user.education}</td>
                                            <td>{user.uni}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => showModal(user)}>View</Button>
                                            </td>
                                            <td>
                                                {!user.rejected &&
                                                    <Button variant="success" onClick={(e) => triggerEmail(e, user, true)} disabled={user.approved}>
                                                        {user.approved ? "User Approved" : "Approve"}
                                                    </Button>
                                                }
                                                {!user.approved && 
                                                    <Button variant="danger" onClick={(e) => triggerEmail(e, user, false)} disabled={user.rejected}>
                                                        {user.rejected ? "User Rejected" : "Reject"}
                                                    </Button>
                                                }
                                            </td>
                                            <td>
                                                {!user.rejected &&
                                                    <Button variant="info" onClick={(e) => checkIn(e, user)} disabled={user.checked}>
                                                        {user.checked ? "Checked" : "Check In"}
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