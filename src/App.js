import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inventory from "./components/inventory/Inventory"
import OrderReview from "./components/OrderReview/OrderReview"
import Notfound from "./components/notfound/Notfound"
import PlaceOrder from "./components/placeOrder/PlaceOrder"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import AuthProvider from "./context/AuthProvider"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import Shipping from "./components/shipping/Shipping"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="home" element={<Shop></Shop>}></Route>
          <Route path="" element={<Shop></Shop>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="inventory" element={<Inventory></Inventory>}></Route>

          <Route
            path="orderReview"
            element={<OrderReview></OrderReview>}></Route>
          <Route
            path="shipping"
            element={
              <PrivateRoute>
                <Shipping></Shipping>
              </PrivateRoute>
            }></Route>
          <Route
            path="placeOrder"
            element={
              <PrivateRoute>
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
            }></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
