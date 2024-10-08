import React from "react";

const PostCard = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading.......</h2>;
  }
  return (
    <>
      {posts.map((post) => (
        <ul
          key={post.id}
          className="list mb-4"
        >
          <li
            key={post.id}
            className="list-item border border-solid  border-b-slate-500 p-4"
          >
            {post.title}
          </li>
        </ul>
      ))}
    </>
  );
};

export default PostCard;
