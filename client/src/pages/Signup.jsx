import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center  min-h-screen p-3 '>
      <h1 className='text-3xl font-semibold text-center text-shadow-blue-800'>Sign Up</h1>
      <form className='flex flex-col w-96 bg-white p-8 rounded-lg shadow-md mt-4'>
        <input type="text" placeholder='Username' className='border border-gray-300 rounded-md p-4  mb-4' id="username" />
        <input type="email" placeholder='Email' className='border border-gray-300 rounded-md p-4  mb-4' id="email" />
        <input type="password" placeholder='Password' className='border border-gray-300 rounded-md p-4  mb-4' id="password" />
        <button type="submit" className='bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-700'>
          Sign Up
        </button>
      </form>
      <div>
        <p className='mt-4 text-gray-600'>Already have an account? <a href="/sign-in" className='text-blue-500 hover:underline'>Sign In</a></p>

      </div>
      
    </div>
  )
}

export default Signup
