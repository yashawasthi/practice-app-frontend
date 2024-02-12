import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/createPost" element={<CreatePost />} />
      <Route path="/posts" element={<AllPosts />} />
  </Routes>
  </BrowserRouter>
);
