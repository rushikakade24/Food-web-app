import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/Slices/SearchSlice'

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-2 mb-10'>
      <div className='mb-4 lg:mb-0'>
            <h3 className=' text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
            <h1 className=' text-2xl font-bold '>Food App</h1>

        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name="search" id="" placeholder='search here' autoCapitalize='off' className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] '/>

        </div>

    </nav>
  )
}

export default Navbar