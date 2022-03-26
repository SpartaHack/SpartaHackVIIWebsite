import { Card, Table, Container, Button } from "react-bootstrap";
import AuthBackground from "../AuthBackground"
import CenteredContainer from "../authentication/CenteredContainer";
import { db } from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";

class User {
    // constructor with name, birthday, education, graddate
    constructor(name, birthday, education, university) {
        this.name = name;
        this.birthday = birthday;
        this.education = education;
        //this.graddate = graddate;
        //this.gender = gender;
        //this.hackathons = hackathons;
        // this.linkedin = linkedin;
        // this.major = major;
        // this.phone = phone;
        // this.race = race;
        // this.statement = statement;
        // this.origin = origin;
        this.uni = university;
    }
    
    toString() {
        return this.name + ", " + this.birthday + ", " + this.education + ", " + this.uni;
    }
}

const userConverter = {
    toFirestore: (user) => {
        return {
            applicantName: user.name,
            dateOfBirth: user.birthday,
            educationLevel: user.education,
            expectedGradDate: user.graddate,
            gender: user.gender,
            hackathonsAttended: user.hackathons,
            linkedin: user.linkedin,
            major: user.major,
            phone: user.phone,
            statement: user.statement,
            travelOrigin: user.origin,
            university: user.uni
        };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new User(data.applicantName, data.dateOfBirth, data.educationLevel, data.expectedGradDate, 
                    data.gender, data.hackathonsAttended, data.linkedin, data.major, 
                    data.phone, data.race, data.statement, data.travelOrigin, data.university);
    }
}

export default function Dashboard(){
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = [];
        
            querySnapshot.forEach((doc) => {
                // create user object from doc.data() and push to Users array
                const new_user = new User(doc.data().applicantName, doc.data().dateOfBirth, doc.data().educationLevel, doc.data().university);
                users.push(new_user);
            })
            setUsers(users);
        }
        fetchData();
    }, []);


    return (
        <AuthBackground>   
            <Container className="main-holder d-flex justify-content-center align-items-center">
                <Container style={{paddingTop: "3em", paddingBottom: "5em"}}>
                    <Card>
                        <h1>Dashboard</h1>
                        <Table responsive>
                            <thead>
                                <tr>
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
                                            <td>{user.name}</td>
                                            <td>{user.birthday}</td>
                                            <td>{user.education}</td>
                                            <td>{user.uni}</td>
                                            <td>
                                                <Button variant="primary">View</Button>
                                            </td>
                                            <td>
                                                <Button variant="success">Approve</Button>
                                                <Button variant="danger">Decline</Button>
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