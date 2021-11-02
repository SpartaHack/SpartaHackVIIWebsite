import React from "react";
import "./FAQSection.css";
import { Container, Accordion, Row, Col } from "react-bootstrap";

export default function FAQSection() {
  return (
    <div>
      <style type="text/css">
        {`
    .accordion {
      bg: red; 
    }

    `}
      </style>

      <div className="faq-section" id="FAQ">
        <Container className="faq-section-container pt-5">
          <div className="faq-header-underline-container">
            <p className="faq-header-text"> FAQ</p>
            <div className="faq-header-text-underline"></div>
          </div>
        </Container>
        <Container className="pt-5">
          <Row>
            <Col></Col>
            <Col xs={10}>
              {" "}
              <Accordion
                flush
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                }}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Spartahack?</Accordion.Header>
                  <Accordion.Body>
                    Spartahack is a 36-hour programming marathon and competition
                    held at Michigan State University on the weekend of January
                    28th-30th. We provide tons of meals, snacks, nap spaces, and
                    swag, free of cost so all you need to worry about is making
                    something cool.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Who can come to Spartahack?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anyone who is currently a student or has graduated within 12
                    months of Spartahack! Graduate students, undergrads, and
                    high-school students from any field of study are welcome.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How can I help?</Accordion.Header>
                  <Accordion.Body>
                    Volunteers are a crucial part of our success. Please email
                    us at hello@spartahack.com.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do I need to know how to code to come to Spartahack?
                  </Accordion.Header>
                  <Accordion.Body>
                    Definitely not! No programming experience is necessary; we
                    have workshops and mentors at the event to help you learn
                    about a variety of topics.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What should I make at Spartahack?
                  </Accordion.Header>
                  <Accordion.Body>
                    Whatever you want to! A lot of people use hackathons as an
                    opportunity to learn a new piece of tech, while others work
                    with tools they know already to build something more
                    challenging.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Where can I park?</Accordion.Header>
                  <Accordion.Body>
                    You can park in{" "}
                    <a href="http://maps.msu.edu/interactive/index.php?location=DPLE">
                      Ramp 5
                    </a>{" "}
                    except for spaces on the first floor, spaces with a
                    pay-by-plate designation, or 24-hour reserved spaces.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Where can I borrow hardware?
                  </Accordion.Header>
                  <Accordion.Body>
                    Come see us at our Help Desk on the first floor during the
                    event!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>I have other questions!</Accordion.Header>
                  <Accordion.Body>
                    "Send them our way at hello@Spartahack.com or come see us at
                    the Help Desk on the first floor during the event!"
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
