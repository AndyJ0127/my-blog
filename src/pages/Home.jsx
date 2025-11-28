import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    { id: 1, title: "柔和色系設計的秘密" },
    { id: 2, title: "如何打造圓角友善 UI" }
  ];

  return (
    <div>
      <h1>最新文章</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

