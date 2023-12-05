import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Group from './pages/Group';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import io from 'socket.io-client';

// const socket = io.connect('http://localhost:8000');
function App() {


// useEffect(() => {
//   // Replace 'http://localhost:8000' with your server URL if different
//   const socket = io('http://localhost:8000');

//   // Setup event
//   socket.on('connect', () => {
//     const userData = { _id: '123' }; // Replace with actual user data
//     socket.emit('setup', userData);
//   });

//   // Listen for 'connected' event
//   socket.on('connected', () => {
//     console.log('Connected to socket.io');
//   });

//   // Listen for 'message received' event
//   socket.on('message recieved', (newMessage) => {
//     console.log('New message received:', newMessage);
//   });

//   // Cleanup on unmount
//   return () => {
//     socket.off('setup');
//     socket.disconnect();
//   };
// }, []);

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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

// Protected Route
export function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem('token');
  if (auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

//Public Route
export function PublicRoutes({ children }) {
  const auth = localStorage.getItem('token');
  if (auth) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
}
