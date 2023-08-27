import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import burger from "../assets/img/burger.jpg";
import fries from "../assets/img/fris.jpg";
import drinks from "../assets/img/drinks.jpg";

export default function Categories() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <React.Fragment>
      <div className="categories">
        <h3 className="categories-title">Categories</h3>
        <p className="categories-desc">Choose All What You Want</p>
        <Container>
          <Row>
            <Col>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={responsive.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={responsive.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="scroll-bar"
              >
                <div className="category-pics">
                  <img src={burger} alt="burger" className="category" />
                  Burger
                </div>
                <div className="category-pics">
                  <img src={fries} alt="fries" className="category" />
                  Fries
                </div>
                <div className="category-pics">
                  <img src={drinks} alt="drinks" className="category" />
                  Drinks
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
