import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { Link } from "react-scroll";
import MLHLogo from "./images/Logos/MLHLogo";

const MainNavBar = () => {
  const history = useHistory();
  function directHome() {
    history.push("/");
  }

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container className="nav-inner-containter">
          <Navbar.Brand href="#home" onClick={directHome} style={{fontFamily : "Montserrat"}}> 
            SPARTAHACK VII
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About" style={{fontFamily : "Montserrat"}}>About</Nav.Link>
              <Nav.Link style={{fontFamily : "Montserrat"}}>
                {/* <Link to="Schedule" duration={500}>
                  {" "}
                  Schedule
                </Link> */}
                Schedule
              </Nav.Link>
              <Nav.Link style={{fontFamily : "Montserrat"}}>
                {" "}
                {/* <Link to="FAQ" duration={500}>
                  {" "}
                  FAQ
                </Link> */}
                FAQ
              </Nav.Link >
              <Nav.Link href="#Sponsors" style={{fontFamily : "Montserrat"}}>
                {" "}
                {/* <Link to="Sponsors" duration={500}>
                  {" "}
                  Sponsors
                </Link> */}
                Sponsors
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="MLHLogo-holder" style={{position: "absolute", right: "5%", top: "0px", width: "5%", height: "auto", zIndex: "1"}}>
            <MLHLogo />
          </div>
        </Container>
      </Navbar>

    </div>
  );
};

export default MainNavBar;
