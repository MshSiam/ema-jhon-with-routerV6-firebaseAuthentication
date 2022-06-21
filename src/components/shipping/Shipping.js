import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import "./shipping.css"

const Shipping = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)
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
