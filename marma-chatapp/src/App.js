import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />

        <Route path="/group" element={<Group />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
