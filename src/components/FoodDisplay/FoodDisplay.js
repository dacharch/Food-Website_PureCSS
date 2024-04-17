import React, { useContext } from 'react'

import FoodItem from '../FoodItem/FoodItem';
import "./FoodDisplay.css"
import { ContextState } from '../../context/StoreContext';





const FoodDisplay = ({category}) => {
 
  const {food_list} = ContextState() ;

  return (
    <div className='food-display' id="food-display">
         <h2>Top dishes near you</h2>
         <div className='food-display-list'>
           {food_list.map((item,index)=>{
               if(category ==="All" || category === item.category){
                     return (
                       <FoodItem
                         key={index}
                         id={item._id}
                         name={item.name}
                         description={item.description}
                         price={item.price}
                         image={item.image}
                       />
                     );
               }

                
           })}
        </div>
    </div>
  )
}

export default FoodDisplay