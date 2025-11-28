import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>文章 #{id}</h1>
      <p>這是文章內容示範。你可以接上 API 或 CMS 來顯示真正內容。</p>
    </div>
  );
}

