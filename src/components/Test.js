import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { actionCreators, selectors, } from '../store/actionCreators'
import { useNavigate } from 'react-router-dom'
import { Button, InputField } from './form/FormFields'

const Test = ({logres, Name,permit}) => {
    const dispatch = useDispatch()
    const navigate =useNavigate()
    console.log(permit,'test')
    useEffect(()=>{
        logres({
          name:'pavan',
          age :'25'
        })
      },[])

  return (
    <div>



    </div>
  )
}

const mapStateToProps=state=>({
    Name:selectors?.getLogRes(state),
    permit:selectors?.getPermit(state)
  })
  const mapDispatchToProps=dispatch=>({
    logres:(data)=>(dispatch(actionCreators?.logres(data)))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Test);