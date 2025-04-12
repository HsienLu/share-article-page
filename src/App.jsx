import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ghibli-beige">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 使用 URL 參數（例如 slug）以讀取特定文章 */}
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
