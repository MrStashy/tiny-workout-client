/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, token }) {


  console.log("Token is: ", token)
  return (
    token
      ? children
      : <Navigate to="/sign-in" />
  );
}