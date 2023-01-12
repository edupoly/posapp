import React from 'react'
import { useEffect } from 'react'
import { useGetSalesQuery } from '../../services/fooditems'
import _ from 'lodash'
function Sales() {
  const {isLoading,data:sales=[]}=useGetSalesQuery()
  const [foodItems, setFoodItems] = React.useState([])
  const [groupeditems, setGroupeditems] = React.useState({})
  console.log("sales",isLoading,sales)
  useEffect(()=>{
    if(sales.length){
      var temp = sales.reduce((a,b)=>{return [...a,...b['billItems']]},[])
      console.log(temp)
      var itemsByName=_.groupBy(temp,'strMeal')
      setGroupeditems({...itemsByName})
      var foodItems=Object.keys(itemsByName)
      setFoodItems(foodItems)
    }
    else{
      console.log("hello")
    }
  },[sales])
  return (
    <div>
      <h1>Sales</h1>
      {
        foodItems.map(item=>(
          <div>
            <h2>{item}:{groupeditems[item].length}</h2>

          </div>
        ))
      }
    </div>
  )
}

export default Sales