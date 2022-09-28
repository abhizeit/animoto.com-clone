import { Routes, Route } from "react-router-dom";
import Features from "../Pages/Features";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Pricing from "../Pages/Pricing";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
