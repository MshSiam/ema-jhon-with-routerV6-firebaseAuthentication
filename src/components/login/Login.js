import React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import "./login.css"

const Login = () => {
  const { signInUsingGoogle, signInusingFacebook } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirect_uri = location.state?.from || "/shop"

  // handle google Login
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      navigate(redirect_uri)
    })
  }
  // handle facebook Login
  const handleFacebookLogin = () => {
    signInusingFacebook().then((result) => {
      navigate(redirect_uri)
    })
  }

  return (
    <>
      <div className="loginDiv">
        <h1>Please Login</h1>
        <form action="">
          <input type="email" name="" placeholder="Email" />
          <br />
          <input type="password" name="" placeholder="Password" />
          <br />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>

      <div className="signInDiv">
        <div className="btn-div">
          <button onClick={handleGoogleLogin} className="btn1">
            Google Sign in
          </button>
          <button onClick={handleFacebookLogin} className="btn2">
            Facebook Sign in
          </button>
        </div>
        <p>
          <Link to="/register">
            {" "}
            <small>--------New to ema john?--------</small>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login
