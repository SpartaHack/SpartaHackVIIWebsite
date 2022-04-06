import React from "react";
import "./FAQSection.css";
import { Container, Accordion, Row, Col } from "react-bootstrap";

export default function FAQSection() {
  return (
    <div>
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
                    held at Michigan State University on the weekend of April
                    8th-10th. We provide tons of meals, snacks, nap spaces, and
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
                    high-school students from any field of study are welcome. At
                    the event please adhere to the
                    <span>
                      <a href="https://static.mlh.io/docs/mlh-member-event-guidelines.pdf">
                        MLH Code of Conduct
                      </a>
                      .
                    </span>
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
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    What is your COVID policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    Masks are required as per guidance of Major League Hacking.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    How do I get admitted?
                  </Accordion.Header>
                  <Accordion.Body>
                    Be a student or recent graduate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    How do I check-in?
                  </Accordion.Header>
                  <Accordion.Body>
                    If registered prior to the event, you will receive a unique QR code via email by Wednesday April 6th to scan upon check-in at Wells Hall.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Could you reimburse my travel expenses?
                  </Accordion.Header>
                  <Accordion.Body>
                    You are eligible for the amount of travel reimbursement indicated in our travel policy if and only if:
                      (1) you and anyone with whom you are carpooling have RSVPed and
                      (2) you follow all of the steps in our <a href="https://docs.google.com/document/d/13bCbIENhAkfRP8VbwvKzkBssnQrnNGMui6j-LftryAo/edit">travel policy</a>.
                    If you are flying, you are subject to the same rules as above.
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
