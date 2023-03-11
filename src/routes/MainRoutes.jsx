import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import ForgotPassword from "../components/ForgotPassword";

function MainRoutes() {
  const authorized = useSelector((state) => state.userData.authorized);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://login-page112.netlify.app/"
          element={<Navigate to="/login" />}
        />
        <Route path="/login" element={!authorized ? <Login /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={authorized ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
