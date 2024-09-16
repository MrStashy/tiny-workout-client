/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

function UserProvider({ children, justRegistered }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setCurrentUser(decodedToken);
    }

    setLoading(false)
  }, [justRegistered]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
