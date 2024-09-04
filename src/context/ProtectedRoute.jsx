/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { currentUser, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    currentUser && Object.keys(currentUser).length > 0
      ? children
      : <Navigate to="/sign-in" />
  );
}