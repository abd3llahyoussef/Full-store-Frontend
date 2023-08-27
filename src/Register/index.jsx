import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export default function Signup() {
  const [user, setUser] = useState([
    {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  ]);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const storeData = async (e) => {
    //post user data
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:8000/makeuser", user);
  };
  return (
    <React.Fragment>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "animate__animated animate__fadeInDown sign-up" : ""
            }
          >
            <Container>
              <Row>
                <Col size={12} md={6}>
                  <form className="sign-up-form" onSubmit={storeData}>
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      id="FirstName"
                      name="firstname"
                      placeholder="Enter FirstName"
                      value={user.firstname}
                      onChange={handleInputs}
                    />
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="text"
                      id="LastName"
                      name="lastname"
                      placeholder="Enter LastName"
                      value={user.lastname}
                      onChange={handleInputs}
                    />
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      value={user.username}
                      onChange={handleInputs}
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                      type="Password"
                      id="Password"
                      name="password"
                      placeholder="Enter Password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                    <button type="submit">
                      <span>Submit</span>
                    </button>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </TrackVisibility>
    </React.Fragment>
  );
}
