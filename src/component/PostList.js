import { Link } from "react-router-dom";

let posts = [
  {
    id: 1,
    title: "this is the Post 1 ? ",
    body: "this is the body post 1 ",
  },
  {
    id: 2,
    title: "this is the Post 2 ? ",
    body: "this is the body post 2 ",
  },
  {
    id: 3,
    title: "this is the Post 3 ? ",
    body: "this is the body post 3 ",
  },
];
const Post = () => {
  let postList = posts.map((post) => {
    return (
      <div key={post.id} style={{ backgroundColor: "orange", marginTop: "20px" }}>
        <h1>{post.title}</h1>
      </div>
    )
  });
  return (

      <div>
        {postList}
      </div>
    
  );
};

export default Post;
