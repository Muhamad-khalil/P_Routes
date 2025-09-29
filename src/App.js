import "./App.css";
import { Link } from "react-router-dom";
import Rout from "./routes/Rout";
import { postsContext } from "./context/postsContext";

function App() {
  return (
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
  );
}

export default App;
