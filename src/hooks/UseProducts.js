import { useEffect } from "react"
import { useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(function () {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return [products]
}

export default useProducts
