import { Link } from "react-router-dom";
import { postsContext } from "../context/postsContext";
import { useContext } from "react";
//
const PostList = () => {
  const posts = useContext(postsContext);
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/PostDetiles/${post.id}`}>
        <div style={{ backgroundColor: "orange", marginTop: "20px" }}>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <div>{postList}</div>;
};

export default PostList;
