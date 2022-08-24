// Authenticate user

import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext"

const AuthenticateUser = ({ children }) => 

{
 const { isUserLoggedIn } = useContext(AuthContext);
 
 return isUserLoggedIn ? children : <Navigate to={'/login'}/>
}

export default AuthenticateUser;