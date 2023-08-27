import React from "react";
import navIcon1 from "../assets/img/nav-icon4.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={6}>
            <p className="logo-3">FOOD</p>
          </Col>
          <Col xs={6}>
            <div className="social-icon-1">
              <a href="IC">
                <img src={navIcon1} alt="contact icon" />
              </a>
              <a href="IC2">
                <img src={navIcon2} alt="contact icon" />
              </a>
              <a href="IC3">
                <img src={navIcon3} alt="contact icon" />
              </a>
              <p className="footer-right">All Rights Reserved,2023</p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
