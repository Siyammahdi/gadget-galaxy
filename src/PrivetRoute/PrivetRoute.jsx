import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="py-36">
            <div className="px-28">
                <h1>{<Skeleton height={70} width={1130} />}</h1>
                <div className="flex gap-10 mt-14">
                    <h1>{<Skeleton height={400} width={350} />}</h1>
                    <h1>{<Skeleton height={400} width={350} />}</h1>
                    <h1>{<Skeleton height={400} width={350} />}</h1>
                </div>
            </div>
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