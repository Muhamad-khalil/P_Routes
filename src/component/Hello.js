import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <h1>This is Component Hello</h1>
      <p>Hello world</p>
      <Link to="/">
        <h1 style={{ backgroundColor: "orange" }}> Go To Home Page</h1>
      </Link>
    </div>
  );
};

export default Hello;
