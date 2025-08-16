import React from 'react'
import { useRoutes } from 'react-router-dom'
import Test from '../components/Test'
import Test1 from '../components/Test1'
import Login from '../login/Login'

const Routers = ({permit}) => {
    let routers= useRoutes([
        {
            path:'/',
            element: <Test/>
        },
        {
            path:'/test1',
            element: <Test1/>
        },
        {
            path:"*",
            element:<h1>404</h1>
        }

    ]
    )
    let routers2=useRoutes([
            {
            path:'/',
            element: <Login/>
        },
        {
            path:"*",
            element:<h1>404</h1>
        }

    ])
    return permit ? routers : routers2
}

export default Routers