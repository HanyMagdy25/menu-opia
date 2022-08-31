import React from "react";
import "./Footer.css";
import logo from "../../assets/white-logo.png";
export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <hr />
      <h4>
        © جميع الحقوق محفوظه Copyright <a href="/">Software Cloud 2</a>
      </h4>
    </footer>
  );
}
