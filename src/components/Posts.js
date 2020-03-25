import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Posts = ({ posts }) => {

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>id</th>
          <th>titile</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.type}</td>
          </tr>
        ))}
      </tbody>
    </table>

    
  );
};

export default Posts;
