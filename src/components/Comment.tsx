import React from "react";
import { FaStar } from "react-icons/fa";
import { IComment } from "../utils/interfaces";

const Comment: React.FC<IComment> = ({ name, rating, message }: IComment) => (
  <div data-testid="comment" className="comment">
    <p>
      <span data-testid="name">{name}</span>
      {Array(rating)
        .fill(0)
        .map((i) => (
          <FaStar key={`star-${i}`} color="#fdc830" />
        ))}
    </p>
    <p data-testid="message">{message}</p>
  </div>
);

export default Comment;
