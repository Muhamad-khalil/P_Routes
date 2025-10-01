import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404 {NotFound}</h1>
      <h3>The Url you visited is not defined</h3>
      <Link to="/home">
        <button>return button to th Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;
