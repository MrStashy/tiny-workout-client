import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const decodedUser = jwtDecode(token);
      setCurrentUser(decodedUser);
    } catch (error) {
      console.error("Invalid token");
      navigate("/");
    }
  }, [navigate]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function ProtectedRoute({ children }) {
    const { currentUser } = useUser();
  
    if (!currentUser) {
      return <Navigate to="/sign-in" />;
    }
  
    return children;
  }

