import React from 'react'
import Test from '../../components/Test'
import Test1 from '../../components/Test1'
import { useRoutes } from 'react-router-dom'

const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Test /> },
        { path: '/test1', element: <Test1 /> },
        { path: "*", element: <h1>404</h1> }
    ])
}

export default MainRoutes