import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Group from './pages/Group';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000');

function App() {
  //Socket wirings
  const sendMessage = () => {
    socket.emit('send_message', { message: 'Hello' });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      alert(data.message);
    });
  }, []);

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

// Protected Route
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
