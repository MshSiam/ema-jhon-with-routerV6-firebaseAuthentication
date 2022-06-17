import React from "react"
import useCart from "../../hooks/useCart"
import useProducts from "../../hooks/UseProducts"
import { clearTheCart, removeFromDb } from "../../utilities/fakedb"
import Cart from "../Cart/Cart"
import ReviewItem from "../reviewItem/ReviewItem"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import "./orderReview.css"

const OrderReview = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)
  const nevigate = useNavigate()
  const handleRemove = (key) => {
    // console.log(key)
    const newCart = cart.filter((product) => product.key !== key)
    setCart(newCart)
    removeFromDb(key)
  }

  const handleOrder = () => {
    nevigate("/placeOrder")
    // setCart([])
    clearTheCart()
  }

  return (
    <div className="shop-cointainer">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.key}
            handleRemove={handleRemove}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        {/* <Link to="/placeOrder" className="btn-regular">
          Place Order
        </Link> */}
        <button onClick={handleOrder} className="btn-regular">
          Place Order
        </button>
      </div>
    </div>
  )
}

export default OrderReview
