import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
  const [cart, setCart] = useState([])

  useEffect(
    function () {
      if (products.length) {
        const savedCart = getStoredCart()
        const sotredCart = []
        for (const key in savedCart) {
          const addedProduct = products.find((product) => product.key === key)
          if (addedProduct) {
            // set quantity
            const quantity = savedCart[key]
            addedProduct.quantity = quantity
            sotredCart.push(addedProduct)
          }
        }
        setCart(sotredCart)
      }
    },
    [products]
  )
  return [cart, setCart]
}

export default useCart
