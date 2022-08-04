import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>
        Wrong URL. <Link to="/">Back home</Link>
      </h1>
    </div>
  );
};
export default Error;
