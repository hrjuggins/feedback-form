import React from "react";
import { IComment, IComments } from "../interfaces";
import Comment from "./Comment";

const Comments: React.FC<IComments> = ({ comments }: IComments) => (
  <div>
    <h2>Comments</h2>
    {comments.map((item: IComment) => (
      <Comment
        key={item.email}
        name={item.name}
        email={item.email}
        rating={item.rating}
        comment={item.comment}
      />
    ))}
  </div>
);

export default Comments;
