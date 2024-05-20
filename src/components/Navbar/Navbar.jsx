import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          onClick={() => {
            setMenu("home");
          }}
          className={`item-list ${menu === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={`item-list ${menu === "menu" ? "active" : ""}`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={`item-list ${menu === "mobile-app" ? "active" : ""}`}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={`item-list ${menu === "contact-us" ? "active" : ""}`}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin((prev) => !prev)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
