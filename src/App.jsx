import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import UserStats from "./pages/UserStats";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import { ProtectedRoute } from "./context/ProtectedRoute";

function App() {
  const [justRegistered, setJustRegistered] = useState(false);

  return (
    <UserProvider>
      <div className="h-screen bg-app-bg bg-cover">
        <div className="h-screen flex flex-col absolute inset-0 bg-gradient-to-b from-tiny-orange/30 to-transparent  font-inter">
          <Header />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/register"
              element={<Register setJustRegistered={setJustRegistered} />}
            />
            {justRegistered && (
              <Route path="/user-details" element={<UserStats />} />
            )}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
