import React from 'react'

const LoginSignup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold font-sans text-center mb-6 text-gray-800">Sign Up</h1>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account? <span className="text-blue-500 cursor-pointer">Login here</span>
        </p>

        <div className="flex items-start mt-4">
          <input type="checkbox" id="terms" className="mt-1 mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            By continuing, I agree to the <span className="text-blue-500">terms of use</span> & <span className="text-blue-500">privacy policy</span>.
          </label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
