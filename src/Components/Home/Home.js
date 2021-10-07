import React from "react";
// import "./Components/CSS/style.css";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./home.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Navbar
        collapseOnSelect="true"
        fixed="top"
        expand="sm"
        className="navigation pt-0 pb-0"
      >
        {/* <img class="img-fluid" alt="logo" src={logo} /> */}
        <b
          style={{
            fontFamily: "Arial",
            fontSize: "22px",
            marginRight: "auto",
          }}
        >
          Eduland
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
                About us{" "}
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

      <div class="abc"></div>

      <div>
          
        <About />

        <Footer />

      </div>
    </div>
  );
};

export default Home;
