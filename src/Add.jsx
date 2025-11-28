import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </div>
    </Router>
  );
}

