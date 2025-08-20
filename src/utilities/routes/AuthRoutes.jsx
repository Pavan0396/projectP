import React from 'react'
import Login from '../../login/Login'
import { useRoutes } from 'react-router-dom'

const AuthRoutes = () => {
    return useRoutes([
        { path: '/', element: <Login /> },
        { path: "*", element: <h1>404</h1> }
    ])
}

export default AuthRoutes