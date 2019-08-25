import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="shop">Shop</Link>
        <Link to="shop">Shop</Link>
      </div>
    </div>
  );
}
