import React from "react";
import Data from "./data/data.json";

const postNew = () => {
  return (
    <div>
      <ul className="list-group mb-4">
        {Data.map((post, index) => {
          return <h1>{post.title}</h1>;
        })}
      </ul>
    </div>
  );
};

export default postNew;
