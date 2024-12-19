import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-register" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </>
  );
}

export default App;
