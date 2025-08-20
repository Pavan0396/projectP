import Layout from '../amp/Layout'
import AuthRoutes from './routes/AuthRoutes'
import MainRoutes from './routes/MainRoutes'

const Routers = ({ permit }) => {
    let Main = <Layout />
    let Auth = <AuthRoutes />
    return permit ? Main : Auth
}

export default Routers