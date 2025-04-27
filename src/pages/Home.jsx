import React from "react";
import {Link} from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    id: 1,
    slug: "week1", // 與檔名（不含副檔名）相同
    title: "有關興趣和 side project 的聯想 (Week 1)",
    date: "2025-04-12",
    excerpt: "有關興趣這件事",
  },
  {
    id: 2,
    slug: "week2", // 與檔名（不含副檔名）相同
    title: "有關興趣和 side project 的聯想 (Week 2)",
    date: "2025-04-20",
    excerpt: "有關 side project 這件事",
  },
  {
    id: 3,
    slug: "week3", // 與檔名（不含副檔名）相同
    title: "有關興趣和 side project 的聯想 (Week 3)",
    date: "2025-04-27",
    excerpt: "有關聯想這件事",
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
