import React from "react";
import { IComment } from "../utils/interfaces";

const Comment: React.FC<IComment> = ({ name, message }: IComment) => (
  <div data-testid="comment">
    <p data-testid="name">{name}</p>
    <p data-testid="message">{message}</p>
  </div>
);

export default Comment;
