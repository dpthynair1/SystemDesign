import React from "react";
import data from "../../Utils/CommentsData";
import CommentItem from "./CommentItem";

const Comments = () => {
  return (
    <div>
      <CommentItem data={data} />
    </div>
  );
};

export default Comments;
