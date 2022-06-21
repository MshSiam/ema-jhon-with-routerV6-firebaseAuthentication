import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div>
      <div className="loginDiv">
        <h1>Register</h1>
        <form action="">
          <input type="name" name="" placeholder="Name" />
          <br />
          <input type="email" name="" placeholder="Email" />
          <br />
          <input type="password" name="" placeholder="Password" />
          <br />
          <input type="password" name="" placeholder="re-enter Password" />
          <br />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
        <p>
          <Link to="/login">
            {" "}
            <small>--------Already have an account?--------</small>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
