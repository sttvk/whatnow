import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/Home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
