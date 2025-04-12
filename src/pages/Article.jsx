// src/pages/Article.jsx
import React from "react";
import {useParams} from "react-router-dom";
import MarkdownViewer from "../components/MarkdownViewer";
import Navbar from "../components/Navbar";

const Article = () => {
  const {slug} = useParams();
  // 假設 slug 就是檔案名稱（不含副檔名），若遇到特殊字元，建議 encodeURIComponent 處理 URL
  const filePath = `/share-article-page/articles/${encodeURIComponent(
    slug
  )}.md`;

  return (
    <>
      <Navbar></Navbar>
      <div className="markdown-content max-w-3xl mx-auto p-8">
        <MarkdownViewer filePath={filePath} />
      </div>
    </>
  );
};

export default Article;
