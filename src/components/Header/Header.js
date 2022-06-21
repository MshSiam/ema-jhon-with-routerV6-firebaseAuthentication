import React from "react"
import logo from "../../images/logo.png"
import "./Header.css"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/orderReview">Order Review</Link>
        {!user?.displayName ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <h4 className="name">{user.displayName}</h4>
            <img className="userPhoto" src={user.photoURL} alt="" />
            <p onClick={logOut}>Log Out</p>
          </>
        )}
      </nav>
    </div>
  )
}

export default Header
