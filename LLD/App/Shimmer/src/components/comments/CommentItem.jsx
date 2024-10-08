import React from "react";

const CommentItem = ({ data }) => {
  return data.map((comment, index) => (
    <div
      className=" pl-10 border-l-2  border-gray-400 "
      key={index}
    >
      <div className="flex">
        <div>
          <img
            className="w-16 p-2 rounded-full items-start"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
            alt="user"
          />
        </div>
        <div className=" ">
          <p className=" flex py-2 font-bold  items-start">
            {comment.userName}
          </p>
          <p className="flex py-2 font-thin items-start">{comment.comment}</p>
        </div>
      </div>
      <div>{comment?.replies && <CommentItem data={comment.replies} />}</div>
    </div>
  ));
};

export default CommentItem;
