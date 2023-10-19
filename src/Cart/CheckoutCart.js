import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutCart = () => {

    const selector= useSelector(state=>state?.listData?.List)
console.log(selector);

  return (
    <div>
      <div>
      This is Cart
      </div>

{
    selector?.map((item, index)=>{
        return(
            <div className="d-flex flex-column">
                      <div>
                        <img src={item.img}></img>
                      </div>
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                      
                    </div>
        )
    })
}
    </div>
  )
}

export default CheckoutCart
