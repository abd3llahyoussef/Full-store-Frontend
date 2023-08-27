import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon4.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import cartIcon from "../assets/img/cart.svg";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "../HomePage";
import Login from "../Login";
import Signup from "../Register";
import Menu from "../Menu";
import Cart from "../Cart";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../storeSlice";

export default function NavBar() {
  const [active, setactive] = useState("Home");
  const [scrolled, setscrolled] = useState(false);

  const data = useSelector((state) => state.products);
  const user = useSelector((state) => state.products.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const activeLink = (value) => {
    setactive(value);
  };

  return (
    <React.Fragment>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <p id="logo-1">FOOD</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                to="/home"
                as={Link}
                className={
                  active === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => activeLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                to="/menu"
                as={Link}
                className={
                  active === "menu" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => activeLink("menu")}
              >
                Menu
              </Nav.Link>
              <div className="mx-1">
                {user === "" ? (
                  <div className="grid grid-cols-2 ">
                    <Nav.Link
                      to="/Login"
                      as={Link}
                      className={
                        active === "Login"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => activeLink("Login")}
                    >
                      Log in
                    </Nav.Link>
                    <Nav.Link
                      to="/signup"
                      as={Link}
                      className={
                        active === "sign up"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => activeLink("sign up")}
                    >
                      sign up
                    </Nav.Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2">
                    <p className="mt-2">{`Hi ${user}`}</p>
                    <Nav.Link
                      to="/"
                      as={Link}
                      className={
                        active === "Logout"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => dispatch(setName(""))}
                    >
                      Log out
                    </Nav.Link>
                  </div>
                )}
              </div>
            </Nav>
            <div className="inline-grid p-0">
              <sup className="text-white decoration-black pl-4 ">
                {data.count}
              </sup>
              <NavLink
                to="cart"
                as={Link}
                className={
                  active === "cart" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => activeLink("cart")}
              >
                <img src={cartIcon} alt="cart" className="cart pb-1.5" />
              </NavLink>
            </div>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="IC">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="IC2">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="IC3">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="menu">
                <button
                  className="vvd"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  <span>Make Order</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}
