import React, { useEffect, useState } from 'react'
import {PropagateLoader} from "react-spinners"

function success() {
  const [loading, setloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },1500);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ?<PropagateLoader color='#36d7b7'/>:      <div>
        <h2 className=' text-3xl font-semibold mb-4 text-center'>Order Succcessful!</h2>
        <p>Your Order Has Been Successfully Placed</p>
        </div>
      }
      


    </div>
  );
};

export default success