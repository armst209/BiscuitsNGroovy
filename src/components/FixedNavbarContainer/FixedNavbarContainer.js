import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import NavbarInside from "../Navbar/Navbar";

function FixedNavbarContainer() {
  return (
    <Navbar
      id="navbar"
      fixed="top"
      collapseOnSelect
      expand="md"
      variant="dark"
      className={
        navbar
          ? "nav-theme active animate-navbar justify-content-between"
          : "nav-theme"
      }
    >
      <NavbarInside />
    </Navbar>
  );
}

export default FixedNavbarContainer;
