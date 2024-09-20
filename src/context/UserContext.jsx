/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children, justRegistered, signedIn }) {
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation();


  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setCurrentUser(decodedToken);
    }   

  }, [justRegistered, signedIn, location]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
