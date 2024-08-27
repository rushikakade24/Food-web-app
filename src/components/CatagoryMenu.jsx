import React,{useEffect, useState} from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux';
import { setcatogary } from '../Redux/Slices/CatagorySlice';

function CatagoryMenu() {
  const [catagories, setcatagories]= useState([]);
  const listUniqueCatogary = () => {
    const uniquecatagories = [
      ... new Set(FoodData.map((food) => food.category)),
    ]
    setcatagories(uniquecatagories)
    
  };
  useEffect (()=>{
    listUniqueCatogary()
  },[]);
  const dispatch =useDispatch()
  const selectedcategorey= useSelector((state)=> state.catagory.catagory);
  return (
    <div className='ml-6'>
      <h3 className=' text-xl font-semibold'>Find the best food</h3>
      <div>
        <div className='my-5 flex gap-3 overflow-x-hidden scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=> dispatch(setcatogary("All"))}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedcategorey==="All" && "bg-green-500 text-white" }`}>All</button>
   {catagories.map((catagories, index)=>{
      return(
<button onClick={()=> dispatch(setcatogary(catagories))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedcategorey===catagories &&  "bg-green-500 text-white" }`}>{catagories}</button>
      )
   })}
        </div>

      </div>
    </div>
  )
}

export default CatagoryMenu