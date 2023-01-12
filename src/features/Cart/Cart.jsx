import React,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useAddBillMutation } from '../../services/fooditems';
import { reset } from './cartSlice';

function Cart() {
  var cartItems = useSelector(state=>state.cart.cartItems);
  const [total, setTotal] = useState(0)
  var [addBill,response] = useAddBillMutation(cartItems)
  const dispatch = useDispatch()
  useEffect(()=>{
    var temp = cartItems.reduce((a,b)=>{return a+b.price},0);
    setTotal(temp)
  },[cartItems])
  console.log("items",cartItems)
  function checkout(){
    var bill= {
      billtime:Date.now(),
      billItems:cartItems
    }
    addBill(bill).then((res)=>{
      alert("Paid No")
      dispatch(reset())
    }).catch(()=>{})
  }
  return (
    <div className='border border-2 p-2 w-25'>
      <h1>Bill:</h1>
      {
        cartItems && cartItems.map((item)=>{
          return(<div className='d-flex flex-wrap justify-content-between'>
          <div className='w-75'>{item.strMeal}</div>
          <div className='w-25 text-end'>{item.price}</div>
          <hr />

        </div>)
        })
      }
        <div className='d-flex flex-wrap justify-content-between'>
          <h1 className='w-75'>Total</h1>
          <h1 className='w-25 text-end'>{total}</h1>
          <hr />
        </div>
        <button className='btn btn-success' onClick={checkout}>Checkout</button>
    </div>
  )
}

export default Cart