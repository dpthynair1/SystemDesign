import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

const PaginationFE = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  console.log("indexOfLastPost", indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log("indexOfFirstPost", indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPosts", currentPosts);
  console.log("total", posts.length);

  // Change Page
  const paginate = (pn) => setCurrentPage(pn + 1);

  return (
    <div>
      <div className="border border-solid border-b-slate-500 text-justify m-auto p-5">
        <h1 className="text-xl mb-3">My Blog</h1>
        <PostCard
          posts={currentPosts}
          loading={loading}
        />
      </div>

      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PaginationFE;
