import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  return (
    <React.Fragment>
      <div className="form">
        <Container className="form-boundary">
          <Row>
            <Col xs={6}>
              <div className="boundary-1"> </div>
            </Col>

            <Col xs={3} className="form-img-1">
              <div className="boundary-2">
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1 ">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-2"
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-2  px-3"
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="px-2"
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        placeholder="Phone No."
                        className="px-2  px-3"
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        placeholder="Message"
                        id="message"
                      ></textarea>
                      <button className="btn-submit" type="submit">
                        submit
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
