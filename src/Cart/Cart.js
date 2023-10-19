import React from 'react'
import { useState } from 'react'
import Shirt from '../Assets/Shirt.png'
import Tshirt from '../Assets/Tshirt.png'
import WomanDress from '../Assets/WomanDress.png'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../Redux/action'

const data = [
  {
    name: 'Man T-Shirt',
    price: 200,
    img: Shirt,
    desc: 'This Item Is Very Good and Beutiful',
  },
  {
    name: 'Man Shirt',
    price: 300,
    img: Tshirt,
    desc: 'This Item Is Very Good and Beutiful',
  },
  {
    name: 'Woman Scart',
    price: 400,
    img: WomanDress,
    desc: 'This Item Is Very Good and Beutiful',
  },
]

const Cart = () => {
  const [cartData, setCartData] = useState(data)
  const [selectedItem, setSelectedItem] = useState([])
const navigate=useNavigate()
const dispatch=useDispatch()
  const addItem = (index) => {
    const clickedData = cartData.filter((value, ind) => index === ind)
    setSelectedItem(clickedData)
  }
const [addedData, setAddedData]=useState([])

  const checkout=()=>{
    
    dispatch(addToCart(selectedItem?.[0]))
    navigate("/Checkout")
  }
  console.log(selectedItem);
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div>
            <div>
              <div className="text-center">Shopping Website</div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Item
                </button>
              </div>
            </div>
            <div className="d-flex">
              {cartData?.map((value, index) => {
                return (
                  <>
                    <div className="d-flex flex-column">
                      <div>
                        <img src={value.img}></img>
                      </div>
                      <div>{value.name}</div>
                      <div>{value.price}</div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#cartbutton"
                          onClick={() => addItem(index)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>

            {/* ADD ITEM MODAL */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add New Item
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="d-flex flex-column">
                      <input type="text" className="mb-2"></input>
                      <input type="text" className="mb-2"></input>
                      <input type="text" className="mb-2"></input>
                      <div className="d-flex justify-content-center">
                        <button className="col-4">Add</button>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart Modal */}
            <div
              class="modal fade"
              id="cartbutton"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {selectedItem.map((item, index) => {
                      return (
                        <>
                          <div>{item.name}</div>
                          <div>{item.desc}</div>
                          <div>{item.price}</div>
                          <div>
                            <button data-bs-dismiss="modal" onClick={checkout}>Add</button>
                          </div>
                        </>
                      )
                    })}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
