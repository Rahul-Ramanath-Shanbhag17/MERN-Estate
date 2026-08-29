import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex  items-center py-4 bg-gray-100">
      <div className="flex justify-between items-center w-full px-4 mx-auto">
      <Link to='/'>
      <h1 className="flex flex-wrap">
      <span className="font-bold text-sm sm:text-xl text-blue-400">Heaven</span>
      <span className="font-bold text-sm sm:text-xl text-green-800">Estate</span> 
      
      </h1>
      </Link>
      <form className="flex items-center bg-slate-200 border border-gray-300 rounded-md px-2 py-1">
        <input type="text" placeholder="Search..." className="  rounded-md py-2 px-4 focus:outline-none w-24 sm:w-64" />
        <FaSearch className="text-black-500 ml-2" />
      </form>
      <ul className="flex gap-3  font-semibold">
        <Link to='/'>
        <li className="hidden sm:inline hover:text-blue-500 cursor-pointer">Home</li>
        </Link>
        <Link to='/about'>
          <li className="hidden sm:inline hover:text-blue-500 cursor-pointer">About</li>
        </Link>
        <Link to='/sign-in'>
          <li className="sm:inline hover:text-blue-500 cursor-pointer">Sign in</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

export default Header
