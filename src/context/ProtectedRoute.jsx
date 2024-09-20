/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, token }) {


  return (
    token
      ? children
      : <Navigate to="/sign-in" />
  );
}