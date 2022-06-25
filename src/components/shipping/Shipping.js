import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import "./shipping.css"
import { getStoredCart } from "../../utilities/fakedb"

const Shipping = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    const savedCart = getStoredCart()
    data.order = savedCart
    // console.log(data)
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
  }
  console.log("example") // watch input value by passing the name of it

  //   handle onclick
  const handleClick = () => {
    navigate("/placeOrder")
  }

  return (
    <div className="shipping-form">
      <h1>Fill up the From for Shipping</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          placeholder="Name"
          value={user.displayName}
          {...register("name")}
        />
        {errors.name && <span className="error">This field is required</span>}

        <input
          placeholder="Email"
          value={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          placeholder="District"
          {...register("district", { required: true })}
        />
        {errors.district && (
          <span className="error">This field is required</span>
        )}
        <input
          placeholder="Zip Code"
          {...register("zipCode", { required: true })}
        />
        {errors.zipCode && (
          <span className="error">This field is required</span>
        )}
        <input
          placeholder="Phone Number"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <span className="error">This field is required</span>
        )}

        <input onClick={handleClick} type="submit" />
      </form>
    </div>
  )
}

export default Shipping
