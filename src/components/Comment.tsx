import React from "react";
import { IComment } from "../interfaces";

const Comment: React.FC<IComment> = ({
  name,
  email,
  rating,
  comment,
}: IComment) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{rating}</p>
    <p>{comment}</p>
  </div>
);

export default Comment;
