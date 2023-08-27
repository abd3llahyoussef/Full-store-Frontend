import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="banner-background">
        <Container className="banner">
          <Row>
            <Col xs={6}>
              <button className="banner-button-1">Welcome To My Store</button>
              <div id="first-paragraph">
                Hi,This is our store
                <p id="sec-paragraph">"PERFECT QUALITY"</p>
              </div>
              <p className="bg-">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                ut deserunt repellendus ex cupiditate eveniet nostrum neque,
                fugit, officiis totam, nemo ab deleniti sint illo? Optio
                repudiandae a pariatur officiis!
              </p>
              <button className="banner-button-2">
                Make Order <ArrowRightCircle size={25} />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
