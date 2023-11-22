import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>
            <h1>{ <Skeleton />}</h1>
            {<Skeleton count={4} />}
        </div>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>

};

PrivetRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivetRoute;