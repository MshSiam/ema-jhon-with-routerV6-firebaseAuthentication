import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  let location = useLocation()

  if (user.displayName) {
    return children
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }}></Navigate>
    </div>
  )
}

export default PrivateRoute