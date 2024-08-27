import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate} from "react-router-dom"

function Cart() {
  const [activeCart,setActiveCart]=useState(false);
  const cartItems = useSelector((state)=>state.cart.cart);
  const TotalQty=cartItems.reduce((TotalQty, item)=> TotalQty +item.qty , 0);
  const Totalprice =cartItems.reduce((TotalPrice, item)=> TotalPrice + item.qty* item.price ,0)
  console.log(cartItems)
  const Navigate =useNavigate();
  return (
    <>
  
    <div className={`fixed right-0 top-0 w-full h-full bg-white  lg:w-[20vw] p-5 ${activeCart ? "translate-x-0": " translate-x-full" } translate-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
            <span className=' text-xl font-bold text-gray-800'>My Order</span>
            <RiCloseLine onClick={()=> setActiveCart(!activeCart)} className=' border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'  />
        </div>
        {
          cartItems.length > 0 ?(cartItems.map((food)=>{
            return(
              <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}></ItemCart>
            )
          })): (<h2 className=' text-center text-xl font-bold text-gray-800'>The Cart is empty</h2>)
        }
      
        <div className=' absolute bottom-0'>
            <h3 className=' font-semibold text-gray-800'>Items:{TotalQty}</h3>
            <h3 className=' font-semibold text-gray-800'>Total Amount:{Totalprice}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button onClick={()=> Navigate("success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]  mb-5'>Checkout</button>
        </div>

    </div>
    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={` rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${TotalQty>0?" animate-bounce delay-500 transition-all":"animate-none"}`}/>
    </>
  )
}

export default Cart