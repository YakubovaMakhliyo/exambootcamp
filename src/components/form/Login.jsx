import React from 'react'
import './Form.css'
const Login = () => {
  return (
    <div className='formfield' >
        
        <form className='form-login'>
        <h1 className='login-text'>Login</h1>
        <input type="text" placeholder='userName...' />
        <input type="text" placeholder='email...' />
        <input type="text" placeholder='password...' />
        <button className='fom-btn'>
            submit
        </button>
    </form>

    </div>
    
  )
}

export default Login