import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../CSS/style.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import logo from "../../images/logo.png";
import Instructor from "../Instructor/Instructor";

const Home = () => {
  return (
    <div id="home">
      <Navbar
        collapseOnSelect="true"
        fixed="top"
        expand="sm"
        className="navigation pt-0 pb-0"
      >
        <img class="img-fluid" alt="logo" src={logo} />
        <b
          style={{
            fontFamily: "Arial",
            fontSize: "22px",
            marginRight: "auto",
          }}
        >
          Edu<span style={{ color: "purple" }}>Land</span>
        </b>
        <Navbar.Toggle
          style={{ marginRight: "10px" }}
          arial-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="px-5" style={{ marginLeft: "auto" }}>
            <Nav.Link>
              <Link
                to="home"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="courses"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Courses{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="instructor"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Instructors{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="services"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Services{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="about"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                About{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="footer"
                smooth={true}
                duration={100}
                className="navlink"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Contact{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div class="abc">
        <div>
          <p
            style={{
              color: "deeppink",
              fontFamily: "cursive,Charcoal,sans-serif",
              textAlign: "justify",
              paddingLeft: "15px",
            }}
          >
            # Learn Anything, Anytime, Anywhere
          </p>
          <p
            style={{
              color: "black",
              fontFamily: "Lucida ,Courier,sans-monospace",
              fontSize: "32px",
              textAlign: "justify",
              paddingLeft: "15px",
            }}
          >
            Best Online <br />
            Learning platform <br />
            for your future
          </p>

          <p
            style={{
              color: "grey",
              fontFamily: "",
              fontSize: "12px",
              textAlign: "justify",
              paddingLeft: "15px",
            }}
          >
            We believe everyone has the capacity to be creative. <br />
            Turitor is a place where people develop their own potential.
          </p>
          <Button variant="warning">View Our Course</Button>{' '}
        </div>
      </div>

      <div>
        <Services />
        <Instructor />

        <About />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
