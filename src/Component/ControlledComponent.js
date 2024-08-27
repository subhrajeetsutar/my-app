import React, { useState } from 'react'

function ControlledComponent() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault()
        alert('your email is'+ email);
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="email" placeholder='Email' defaultValue={email} onChange={(e)=>setEmail(e)}/>
        <input type="password" name="" placeholder='Password' defaultValue={password} onChange={(e)=>setPassword(e)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComponent
