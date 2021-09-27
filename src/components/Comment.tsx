import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { IComment } from "../utils/interfaces";

const Comment: React.FC<IComment> = ({
  name,
  rating,
  message,
  lastIndex,
}: IComment) => (
  <motion.div
    animate={{ x: 0, opacity: 1, y: 0 }}
    initial={lastIndex ? { x: -300, opacity: 1 } : { y: -100 }}
    transition={{ duration: 0.5 }}
    data-testid="comment"
    className="comment"
  >
    <p>
      <span data-testid="name">{name}</span>
      {Array(rating)
        .fill(0)
        .map((i) => (
          <FaStar
            key={`${Math.random().toString(36).substr(2, 9)}`}
            color="#fdc830"
          />
        ))}
    </p>
    <p data-testid="message">{message}</p>
  </motion.div>
);

export default Comment;
