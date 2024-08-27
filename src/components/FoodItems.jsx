import React from 'react'
import Foodcart from './foodcart'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItems() {
  const category = useSelector((state)=> state.catagory.catagory)
  const Search = useSelector((state)=> state.search.search)
  const HandleToast=(name) => toast.success(`Added ${name} Successfully`)
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
<div className='flex justify-center flex-wrap lg:justify-start mx-6 my-10' style={{ gap: '1.5rem' }}>
    {
      FoodData.filter((food)=>{
        if(category==="All"){
          return food.name.toLowerCase().includes(Search.toLowerCase());
        }
        else{
          return category === food.category && food.name.toLowerCase().includes(Search.toLowerCase());
        }
      }).map((Food)=>(<Foodcart key={Food.id} id={Food.id}  img={Food.img} name={Food.name} price={Food.price} desc={Food.desc}  rating={Food.rating} HandleToast={HandleToast}></Foodcart>))}
    </div>
    </>

    
  )
}

export default FoodItems