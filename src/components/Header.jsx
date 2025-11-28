import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">首頁</Link>
        <Link to="/about">關於</Link>
      </nav>
    </header>
  );
}

