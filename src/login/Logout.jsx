import { connect, useDispatch } from "react-redux"
import { actionCreators, selectors } from "../store/actionCreators"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Logout = ({permit,children}) => {
const navigate= useNavigate()
const dispatch =useDispatch()
useEffect(()=>{
   
        if(!permit){
        dispatch(actionCreators?.inout(false))
        navigate('/')
        }
    
},[permit ])
return(
    <>
     {children}
    </>

)
}
const mapStateToProps =state=>({
    permit:selectors?.getPermit(state)
  })
  export default connect(mapStateToProps,null)(Logout)