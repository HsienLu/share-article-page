// src/components/Navbar.jsx
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* 可替換 logo 或文字 */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">文章列表</Link>
        </div>
        {/* 可在此新增其他導覽項目 */}
        <div>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            回到列表
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
