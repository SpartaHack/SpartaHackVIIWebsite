//import ReactIntense from "react-intense";
import React from "react";
import Image from "react-image-enlarger";
import { Container } from "react-bootstrap";
import "./ScheduleSection.css";
import "./FAQSection.css";


export default function MapSection() {
    const [zoomed1, setZoomed1] = React.useState(false);
    const [zoomed2, setZoomed2] = React.useState(false);
    const [zoomed3, setZoomed3] = React.useState(false);

    const images = [
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%201%20Map.png?alt=media&token=ebd0916d-7bdd-4584-be70-d6aa590976ee`},
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%202%20Map.png?alt=media&token=eda4aa74-6bdf-412e-8e81-5c82c4021236`},
        {src: `https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/maps%2FSpartaHackVII%20Floor%203%20Map.png?alt=media&token=3e5fe33f-8402-416a-90fc-68a5a4b11975`},
    ]

    return (
        <div>
            <div className="faq-section" id="Maps">
                <Container className="faq-section-container pt-5">
                    <div className="faq-header-underline-container">
                        <p className="faq-header-text">Maps</p>
                        <div className="faq-header-text-underline"></div>
                    </div>
                </Container>
                <div className="schedule-cards-holder">
                    {images.map((image, index) => (
                        <Image
                            style={{ width: "300px", height: "auto" }}
                            src={image.src}
                            alt={`Floor ${index + 1}`}
                            zoomed={index === 0 ? zoomed1 : index === 1 ? zoomed2 : zoomed3}
                            onClick={() => {
                                if (index === 0) {
                                    setZoomed1(true);
                                } else if (index === 1) {
                                    setZoomed2(true);
                                } else {
                                    setZoomed3(true);
                                }
                            }}
                            onRequestClose={() => {
                                if (index === 0) {
                                    setZoomed1(false);
                                } else if (index === 1) {
                                    setZoomed2(false);
                                } else {
                                    setZoomed3(false);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}