import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Products from "../pages/Products";
import AdminDashboard from "../pages/AdminDashboard";
import { useAuth } from "../context/AuthContext";


const PrivateRoute = ({ children }: any) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/productos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}