import React from 'react'
import Navbar from '../components/Navbar'
import CatagoryMenu from '../components/CatagoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

function home() {
  return (
    <>
       <Navbar></Navbar>
       <CatagoryMenu></CatagoryMenu>
       <FoodItems></FoodItems>
       <Cart></Cart>
    </>

  )
}

export default home