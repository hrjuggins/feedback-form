import React from "react";
import { IComment, IComments } from "../utils/interfaces";
import Comment from "./Comment";

const Comments: React.FC<IComments> = ({ comments }: IComments) => (
  <div data-testid="comments">
    <h2>Comments</h2>
    {comments.map((item: IComment) => (
      <Comment key={item.name} name={item.name} message={item.message} />
    ))}
  </div>
);

export default Comments;
