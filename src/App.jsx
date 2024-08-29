import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-app-bg bg-cover">
      <div className="h-screen flex flex-col absolute inset-0 bg-gradient-to-b from-tiny-orange/30 to-transparent  font-inter">
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
