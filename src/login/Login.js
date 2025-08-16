import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionCreators } from '../store/actionCreators'

const Login = () => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const  handleLogin = ()=>{
        if(userName == 'pavan123' && password == 'Tms@12345'){  
            dispatch(actionCreators?.inout(true))
            navigate('/')
        }else{
          alert('Wrong username or password')
        }
    }
  return (
    <div>
       <input type='text' onChange={(e)=>{setUserName(e.target.value)}}/>
       <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

  
export default Login