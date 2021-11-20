import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const history = useHistory();
  function directHome() {
    history.push("/");
  }

  return (
    <div>
      <Navbar
        // className="position-absolute mt-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" onClick={directHome} style={{fontFamily : "Montserrat"}}> 
            SPARTAHACK VII
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About" style={{fontFamily : "Montserrat"}}>About</Nav.Link>
              <Nav.Link style={{fontFamily : "Montserrat"}}>
                <Link to="Schedule" duration={500}>
                  {" "}
                  Schedule
                </Link>
              </Nav.Link>
              <Nav.Link style={{fontFamily : "Montserrat"}}>
                {" "}
                <Link to="FAQ" duration={500}>
                  {" "}
                  FAQ
                </Link>
              </Nav.Link >
              <Nav.Link href="#Sponsors" style={{fontFamily : "Montserrat"}}>
                {" "}
                <Link to="Sponsors" duration={500}>
                  {" "}
                  Sponsors
                </Link>
              </Nav.Link>

              {/* <FaFacebookSquare className="fb-icon" />

          <FaInstagram className="instagram-icon" />

          <FaTwitterSquare className="twitter-icon" /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
