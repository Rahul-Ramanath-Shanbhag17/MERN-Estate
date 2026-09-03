import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [formData,setFormData] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    setLoading(true)
    const res=await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=await res.json()
    if(data.success===false){
      setError(data.message)
      setLoading(false)
      return

    }
    setLoading(false)
    setError(null)
    navigate('/sign-in')
  }
  return (
    <div className='flex flex-col items-center  min-h-screen p-3 '>
      <h1 className='text-3xl font-semibold text-center text-shadow-blue-800'>Sign Up</h1>
      <form onSubmit={handleSubmit}className='flex flex-col w-96 bg-white p-8 rounded-lg shadow-md mt-4'>
        <input type="text" placeholder='Username' className='border border-gray-300 rounded-md p-4  mb-4' id="username" onChange={handleChange} />
        <input type="email" placeholder='Email' className='border border-gray-300 rounded-md p-4  mb-4' id="email" onChange={handleChange} />
        <input type="password" placeholder='Password' className='border border-gray-300 rounded-md p-4  mb-4' id="password" onChange={handleChange} />
        <button disabled={loading}type="submit" className='bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-700'>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div>
        <p className='mt-4 text-gray-600'>Already have an account? <a href="/sign-in" className='text-blue-500 hover:underline'>Sign In</a></p>

      </div>
      
    </div>
  )
}

export default Signup
