import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import CreatePost from './pages/CreatePost';
import Layout from './components/Layout';
import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="my-posts" element={<MyPosts />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;