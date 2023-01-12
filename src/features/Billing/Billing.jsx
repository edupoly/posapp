import React from 'react'
import Cart from '../Cart/Cart'
import FoodItems from '../Food/FoodItems'

function Billing() {
  return (
    <div className='d-flex flex-wrap'>
      <FoodItems></FoodItems>
      <Cart></Cart>
    </div>
  )
}

export default Billing