import { createContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const CurrentUserContext = createContext()

export function CurrentUserProvider({children}) {
    const navigate = useNavigate()


    const token = localStorage.getItem("Token")
   
    if (!token) {
        navigate('/')
    }

    const currentUser = jwtDecode(localStorage.getItem("Token"))

    return (
        <CurrentUserContext.Provider value={{currentUser}} >
            {children}
        </CurrentUserContext.Provider>
    )
}




