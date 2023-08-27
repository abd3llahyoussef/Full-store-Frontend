import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import Menu from "../Menu";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../storeSlice";

export default function Login() {
  const [user, setUser] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  const navigate = useNavigate();
  const userData = useSelector((state) => state.products.user);
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const getUser = async (e) => {
    e.preventDefault();
    const userInfo = await axios.post("http://localhost:8000/verifyuser", user);
    if (user.username === userInfo.data) {
      dispatch(setName(user.username));
      toast.success(`Logged In Successfully, hello ${userData}`, {
        position: "top-center",
      });
      navigate("/");
    } else {
      toast.error("Username or Password is Wrong", {
        position: "top-right",
      });
    }
  };

  return (
    <React.Fragment>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "animate__animated animate__slideInDown log-in" : ""
            }
          >
            <Container>
              <Row>
                <Col size={12} md={6}>
                  <form className="log-in-form" onSubmit={getUser}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      value={user.username || ""}
                      onChange={handleInputs}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="Password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={user.password || ""}
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
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </React.Fragment>
  );
}
