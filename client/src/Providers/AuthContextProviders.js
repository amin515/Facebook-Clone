
// contxt providers

import { useReducer } from "react";
import AuthContext from "../Context/AuthContext"
import AuthReducer from "../Reducers/AuthReducer";

// initial state
const INITIAL_STATE = {
    isUserLoggedIn : false,
    user : { }
}
const AuthContextProvider = ({ children }) => {

    // use reducer
    const [state, dispatch] = useReducer(AuthReducer ,INITIAL_STATE)
    return(
        <AuthContext.Provider
        value={
            {
                isUserLoggedIn : state.isUserLoggedIn,
                user : state.user,
                dispatch
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )

}
//export Context provider
export default AuthContextProvider;