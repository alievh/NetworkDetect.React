import React from 'react'
import Col from '../Bootstrap/Col.tsx'

const SignIn = () => {
  return (
    <Col lg="6">
      <div className="authorization_title">
        <h5>Sign In</h5>
      </div>
      <form className="authorization_form">
        <div>
          <label>Email address</label>
          <input placeHolder="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeHolder="password"></input>
        </div>
        <div>
            <button>SIGN IN</button>
        </div>
      </form>
    </Col>
  )
}

export default SignIn