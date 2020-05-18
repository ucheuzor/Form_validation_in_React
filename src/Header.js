import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import SearchInput from "./SearchInput";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header container-1000">
      <div className="container-600 flex">
        <span className="header__icon-background">
          <span className="header__icon" />
        </span>
        <SearchInput />
      </div>
      <div className="header__actions">
        <Link to="/login" className="header__login-action">
          <Button className="header__login-action">Login</Button>
        </Link>
        <Link to="/signup" className="header__register-action">
          <Button className="button__filled">Register</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
