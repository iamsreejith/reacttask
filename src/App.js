import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
// import SelectFilter from "./components/SelectFilter";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // const [filter, setFilter] = useState(null);
  // const [tags, setTags] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/sreejith97/MyAPI/posts"
      );
      setPosts(res.data);
      
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      {/* <SelectFilter /> */}
      <Posts posts={currentPosts} />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default App;
