// src/components/MarkdownViewer.jsx
import React, {useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({filePath}) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("無法讀取檔案：" + filePath);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => console.error(error));
  }, [filePath]);

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
