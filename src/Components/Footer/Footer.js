import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../CSS/style.css";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_briozpd",
        "template_rsfuwdl",
        e.target,
        "user_ULAyuji8VrqywxuyFC9GG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div class="footer" id="contact">
        <MDBFooter style={{ color: "white" }} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h4
                  style={{ fontWeight: "bold", paddingTop: "20px" }}
                  className="title"
                >
                  <img class="img-fluid" alt="logo" src={logo} />
                  Eduland
                </h4>
                <p class="address">
                  <GoLocation size="1.2em" /> 62/A, Bashundhara R/A, 1229 Dhaka
                  <br />
                  <FiPhone size="1.2em" /> 01857528424
                  <br />
                  <HiOutlineMail size="1.3em" /> eduland@gmail.com
                </p>
              </MDBCol>

              <MDBCol md="2">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#123456",
                    textDecoration: "underline",
                    textDecorationColor: "#728FCE",
                    textUnderlinePosition: "under",
                    textDecorationThickness: "2.8px",
                    padding: "10px",
                  }}
                  className="title"
                >
                  Links
                </h5>
                <ul
                  class="list-group list-group-vertical"
                  style={{ fontSize: "16px" }}
                >
                  <li className="list-unstyled">
                    <Link
                      to="home"
                      smooth={true}
                      duration={100}
                      style={{ color: "white", cursor: "pointer" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link
                      to="services"
                      smooth={true}
                      duration={100}
                      style={{ color: "white", cursor: "pointer" }}
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link
                      to="instructor"
                      smooth={true}
                      duration={100}
                      style={{ color: "white", cursor: "pointer" }}
                    >
                      Instructors
                    </Link>
                  </li>

                  <li className="list-unstyled">
                    <Link
                      to="about"
                      smooth={true}
                      duration={100}
                      style={{ color: "white", cursor: "pointer" }}
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h4
                  style={{
                    fontWeight: "bold",
                    color: "#728FCE",
                    paddingTop: "5px",
                  }}
                >
                  Contact us
                </h4>
                <form onSubmit={sendEmail}>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your e-mail"
                    required
                  />
                  <br />
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="message"
                    required
                  />
                  <br />
                  <div style={{ textAlign: "right" }}>
                    <input type="submit" class="btn btn-success" value="Send" />
                    <br />
                    <br />
                  </div>
                </form>

                <div style={{ textAlign: "right" }}>
                  <ul class="list-group list-group-horizontal">
                    <li
                      className="list-unstyled"
                      style={{ paddingLeft: "40%", paddingRight: "15px" }}
                    >
                      <a href="https://www.facebook.com">
                        <FiFacebook size="1.3em" />
                      </a>
                    </li>
                    <li
                      className="list-unstyled"
                      style={{ paddingRight: "15px" }}
                    >
                      <a href="https://www.instagram.com">
                        <FiInstagram size="1.3em" />
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://www.linkedin.com">
                        <FiLinkedin size="1.3em" />
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid style={{ paddingTop: "2px" }}>
              &copy; {new Date().getFullYear()} Copyright{" "}
              <a href="https://www.eduland.com">eduland.com</a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Footer;
