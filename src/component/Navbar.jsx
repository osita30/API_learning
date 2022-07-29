import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center item-center border-b dark: border-gray-700 border-gray-200'>
    <div className='flex justify-between item-center space-x-5 w-screen'>
    <Link to="/">
      <p className='text-2xl dark:bg-blue-500 text-white py-1 px-2 round dark:bg-gray-500 dark:text-gray-900'>
        Google 🔍
      </p>
    </Link>
     <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full first-letter px-2 py-1 hover-shadow-lg'>
     {darkTheme? "light ☪️ ":"Dark 🌙"}

     </button>
    </div>

    </div>
  )
}
