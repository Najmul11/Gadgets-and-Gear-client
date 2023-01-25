import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../pages/sharedComponents/Loader/Loader';

const PrivateRoute = ({children}) => {
   const {user, loading}=useContext(AuthContext)
   const location = useLocation();

    if (user) {
        return children
    }
    if (loading) {
        return <Loader></Loader>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute; 