import React from "react";
import NavBar from "../navigation/NavBar";
import { BrowserRouter } from "react-router-dom";

export default function Header() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}
