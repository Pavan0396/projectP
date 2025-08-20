import AuthRoutes from './routes/AuthRoutes'
import MainRoutes from './routes/MainRoutes'

const Routers = ({ permit }) => {
    let Main = <MainRoutes />
    let Auth = <AuthRoutes />
    return permit ? Main : Auth
}

export default Routers