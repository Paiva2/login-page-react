import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/ForgotPassword";
import Modal from "react-modal/lib/components/Modal";

function App() {
  const authorized = useSelector((state) => state.userData.authorized);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
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

export default App;
Modal.setAppElement("#root");
