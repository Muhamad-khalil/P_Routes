import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../context/postsContext";

const PostDetiles = () => {
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });
  console.log(post);

  if (post) {
    return (
      <div>
        <h1>Post Detiles Page</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>the post id is {postId} is not exist</h1>
        <Link to="/PostList">
          <button>Go to Posts </button>
        </Link>
      </div>
    );
  }
};

export default PostDetiles;
