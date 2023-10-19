import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutCart = () => {

    const selector= useSelector(state=>console.log(state))
// console.log(location);

  return (
    <div>
      This is Cart
    </div>
  )
}

export default CheckoutCart
