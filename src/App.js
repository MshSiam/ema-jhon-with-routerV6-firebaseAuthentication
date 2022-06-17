import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inventory from "./components/inventory/Inventory"
import OrderReview from "./components/OrderReview/OrderReview"
import Notfound from "./components/notfound/Notfound"
import PlaceOrder from "./components/placeOrder/PlaceOrder"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/home" element={<Shop></Shop>}></Route>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="inventory" element={<Inventory></Inventory>}></Route>
          <Route path="placeOrder" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route
            path="orderReview"
            element={<OrderReview></OrderReview>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
