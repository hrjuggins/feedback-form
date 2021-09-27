import React from "react";
import { IComment, IComments } from "../utils/interfaces";
import Comment from "./Comment";

const Comments: React.FC<IComments> = ({ comments }: IComments) => (
  <div data-testid="comments" className="comments-container">
    <h2>Latest Comments</h2>
    <div className="comments-list">
      {comments
        .map((item: IComment, index, { length }) => {
          const lastIndex = index + 1 === length;
          return (
            <Comment
              key={Math.random().toString(36).substr(2, 9)}
              name={item.name}
              rating={item.rating}
              message={item.message}
              lastIndex={lastIndex}
            />
          );
        })
        .reverse()}
    </div>
  </div>
);

export default Comments;
