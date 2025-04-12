import React from "react";
import {Link} from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    id: 1,
    slug: "有關興趣和side project的聯想_week1", // 與檔名（不含副檔名）相同
    title: "有關興趣和 side project 的聯想 (Week 1)",
    date: "2025-04-12",
    excerpt:
      "這是一篇關於興趣和 side project 的文章，分享了我的一些想法和經驗。",
  },
];

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Hsienlu的分享文章
      </h1>
      <div className="flex flex-col gap-8">
        {articles.map((article) => (
          <Link key={article.id} to={`/article/${article.slug}`}>
            <ArticleCard {...article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
