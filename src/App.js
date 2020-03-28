import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import SelectFilter from "./components/SelectFilter";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/sreejith97/MyAPI/posts"
      );
      setPosts(res.data);
      setFilter(res.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let currentPosts = filters.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filters.length}
        paginate={paginate}
      />
      <SelectFilter setFilter={setFilter} posts={posts} />
    </div>
  );
};

export default App;
