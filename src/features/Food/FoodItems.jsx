import React from 'react'
import { useDispatch } from 'react-redux';
import { useGetFoodItemsQuery } from '../../services/fooditems'
import { addItemToCart } from '../Cart/cartSlice';

function FoodItems() {
  const {isLoading,data:items}=useGetFoodItemsQuery();
  var dispatch = useDispatch()
  console.log("data",items,isLoading)
  return (
    <div className='border border-2 p-2 w-75 d-flex flex-wrap justify-content-around'>
      <br />
      {isLoading && (
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif" alt="" />
      )}
      {
        !isLoading && items.map((item)=>{
          return(
            <div className='w-25 p-2'>
              <b>{item.strMeal}</b>
              <img src={item.strMealThumb} className="img-thumbnail" width="100%" alt="" />
              <button className='btn btn-danger m-2 mx-auto' onClick={()=>{dispatch(addItemToCart(item))}}>Add To Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodItems