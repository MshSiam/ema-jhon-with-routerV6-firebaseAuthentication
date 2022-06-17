import React from "react"
import useCart from "../../hooks/useCart"
import useProducts from "../../hooks/UseProducts"
import Cart from "../Cart/Cart"
import ReviewItem from "../reviewItem/ReviewItem"
import "./orderReview.css"

const OrderReview = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)
  const handleRemove = (key) => {
    // console.log(key)
    const newCart = cart.filter((product) => product.key !== key)
    setCart(newCart)
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
      </div>
    </div>
  )
}

export default OrderReview
