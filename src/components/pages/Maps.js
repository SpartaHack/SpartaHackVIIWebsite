import AuthBackground from "../AuthBackground"
import { Container } from "react-bootstrap";
import MapSection from "../SiteSections/MapSection";

export default function Maps() {
    return (
        <AuthBackground>
            <Container style={{paddingTop: "3em", paddingBottom: "5em"}}>
                <MapSection/>
            </Container>
        </AuthBackground>
    );
}