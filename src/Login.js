import React from "react";
import Overlay from "./Overlay";
import Input from "./Input";
import Button from "./Button";
import { Formiz } from "@formiz/core";
import { Link } from "react-router-dom";
import "./login.scss";
import { isMinLength, isEmail } from "@formiz/validations";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <span className="login__icon" />
        <h1 className="login__heading">Login to twitter</h1>
        <Formiz>
          <form className="login__form">
            <Input
              label="Email address"
              name="email"
              groupClassName="login__form-group"
              required="Email is required"
              validations={[
                {
                  rule: isEmail()
                }
              ]}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              required="Password is required"
              groupClassName="login__form-group"
              validations={[
                {
                  rule: isMinLength(6)
                }
              ]}
            />
            <Button className="button__filled" style={{ padding: "14px" }}>
              Login
            </Button>
          </form>
        </Formiz>
        <Link to="/signup">Register on Twitter</Link>
      </div>
    </div>
  );
};

export default Login;
