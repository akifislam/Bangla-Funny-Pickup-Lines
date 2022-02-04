import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Inspired from Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Akif Islam</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="tel:+8801795672702"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlinePhone />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:iamakifislam@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
