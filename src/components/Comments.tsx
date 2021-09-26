import React from "react";
import { IComment, IComments } from "../utils/interfaces";
import Comment from "./Comment";

const Comments: React.FC<IComments> = ({ comments }: IComments) => (
  <div data-testid="comments" className="comments-container">
    <h2>Latest Comments</h2>
    <div className="comments-list">
      {comments
        .map((item: IComment) => (
          <Comment
            key={item.name}
            name={item.name}
            rating={item.rating}
            message={item.message}
          />
        ))
        .reverse()}
    </div>
  </div>
);

export default Comments;
