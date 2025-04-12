// src/App.jsx
import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";

function App() {
  return (
    // 使用 HashRouter 而非 BrowserRouter
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
