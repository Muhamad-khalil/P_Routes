import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Hello from "../component/Hello";
import PostList from "../component/PostList";
import PostDetiles from "../component/PostDetiles";
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/PostDetiles" element={<PostDetiles />} />
      </Routes>
    </div>
  );
};

export default Rout;
