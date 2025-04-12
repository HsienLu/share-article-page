import React from "react";

const ArticleCard = ({title, date, excerpt}) => (
  <div className="p-6 bg-white shadow rounded-md hover:shadow-lg transition-shadow duration-200">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-500 text-sm">{date}</p>
    <p className="mt-4 text-gray-700 leading-relaxed">{excerpt}</p>
  </div>
);

export default ArticleCard;
