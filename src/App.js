import "./App.css";
import { Link } from "react-router-dom";
import Rout from "./routes/Rout";
import { postsContext } from "./context/postsContext";

let postData = [
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
function App() {
  return (
    <postsContext.Provider value={postData}>
      <div className="App">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/hello">
          <button>Hello</button>
        </Link>
        <Link to="/PostList">
          <button>Posts</button>
        </Link>

        <Rout />
      </div>
    </postsContext.Provider>
  );
}

export default App;
