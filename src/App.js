import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Group from './pages/Group';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Home2 from './pages/Home2';

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoutes>
              <ForgotPassword />
            </PublicRoutes>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoutes>
              <Settings />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/group"
          element={
            <ProtectedRoutes>
              <Group />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// Protected Routes
export function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem('data');
  if (auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

//Public Route
export function PublicRoutes({ children }) {
  const auth = localStorage.getItem('data');
  if (auth) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
}
