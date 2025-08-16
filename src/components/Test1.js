import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { actionCreators, selectors, } from '../store/actionCreators'
import { useNavigate,  } from 'react-router-dom'

const Test1 = ({Name,Age}) => {
  const navigate=useNavigate()
  const dispatch= useDispatch()
   const handlelogout=()=>{
    dispatch(actionCreators?.inout(false))
    navigate('/')
   }
  return (
    <div>{Name}{Age}&nbsp;test1<button onClick={handlelogout}>logout</button></div>
  )
}

const mapStateToProps=state=>({
    Name:selectors?.getLogRes(state),
    Age:selectors?.getAge(state)
  })
  
  
  export default connect(mapStateToProps)(Test1);