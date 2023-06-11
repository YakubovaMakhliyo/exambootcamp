import React from 'react'
import './Form.css'
const Register = ({setSHowRegister}) => {
  return (
    <div className='formfield' onClick={()=>setSHowRegister(false)}>
        
        <form className='form-Register'>
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

export default Register