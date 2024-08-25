import React from "react";
import Col from "../Bootstrap/Col.tsx";

const SignUp = () => {
  return (
    <Col className="authorization_divider" lg="6">
      <div className="authorization_title">
        <h5>Sign Up</h5>
        <p>Create an account for faster checkout</p>
      </div>
      <form className="authorization_form">
        <div>
          <label>Firstname</label>
          <input placeHolder="firstname"></input>
        </div>
        <div>
          <label>Lastname</label>
          <input placeHolder="lastname"></input>
        </div>
        <div>
          <label>Email address</label>
          <input placeHolder="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeHolder="password"></input>
        </div>
        <div>
          <label>Confirm password</label>
          <input type="password" placeHolder="confirm password"></input>
        </div>
        <div><button>REGISTER</button></div>
      </form>
    </Col>
  );
};

export default SignUp;
