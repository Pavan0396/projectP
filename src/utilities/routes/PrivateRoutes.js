import React from 'react'
import Logout from '../../login/Logout'
import { Outlet} from 'react-router-dom'
import Routers from '..'


const PrivateRoutes = ({permit}) => {  
  return (
   <>
      <Logout>
         <Routers permit={permit}/>
         <Outlet/>
       </Logout>
   </>
  )
}
export default PrivateRoutes