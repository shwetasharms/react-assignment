
import { Navigate } from "react-router-dom";
export const ProtectRoute = ({ children }) => {
    const login =    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData')):null
    if(!login){
        return <Navigate to={'/'} replace={true}></Navigate>
    }
    return children;
}