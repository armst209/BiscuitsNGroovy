import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

function FixedNavbarContainer() {
  return (
    <NavbarBrand sticky="top">
      <Navbar />
    </NavbarBrand>
  );
}

export default FixedNavbarContainer;
