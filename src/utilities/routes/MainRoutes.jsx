import React from 'react'
import Test from '../../components/Test'
import Test1 from '../../components/Test1'
import { useRoutes } from 'react-router-dom'
import Home from '../../amp/Home/Home'
import General from '../../amp/General/General'
import Technical from '../../amp/Technical/Technical'
import AddAsset from '../../amp/General/Assets/AddAsset'
import ListAsset from '../../amp/General/Assets/ListAsset'
import ListAction from '../../amp/General/ActionPlan/ListAction'
import AddAction from '../../amp/General/ActionPlan/AddAction'
import BulkUploadAction from '../../amp/General/ActionPlan/BulkUploadAction'

const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/general', element: <General /> ,},
        { path: '/technical', element: <Technical /> },
        { path: '/general/addasset', element: <AddAsset /> },
        { path: '/general/listasset', element: <ListAsset /> },
        { path: '/general/listaction', element: <ListAction /> },
        { path: '/general/addaction', element: <AddAction /> },
        { path: '/general/bulkuploadaction', element: <BulkUploadAction /> },
        { path: "*", element: <h1>404</h1> }
    ])
}

export default MainRoutes