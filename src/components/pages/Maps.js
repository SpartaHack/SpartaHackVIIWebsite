import AuthBackground from "../AuthBackground"
import { Container } from "react-bootstrap";
import ReactIntense from "react-intense";

export default function Maps() {
    const images = [
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%201%20Map.png?alt=media&token=ebd0916d-7bdd-4584-be70-d6aa590976ee`},
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%202%20Map.png?alt=media&token=eda4aa74-6bdf-412e-8e81-5c82c4021236`},
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%203%20Map.png?alt=media&token=3e5fe33f-8402-416a-90fc-68a5a4b11975`},
    ]

    return (
        <AuthBackground>
            <Container style={{paddingTop: "3em", paddingBottom: "5em"}}>
                <div style={{"text-align":"center"}}>
                    {images.map((image, index) => (
                        <ReactIntense src={image.src} />
                    ))} 
                </div>
            </Container>
        </AuthBackground>
    );
}