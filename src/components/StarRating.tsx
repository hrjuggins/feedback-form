import React from "react";
import { FaStar } from "react-icons/fa";
import { IStarRating } from "../interfaces";

const StarRating: React.FC<IStarRating> = ({
  ratingValue,
  setRating,
}: IStarRating) => (
  <div>
    {Array(5)
      .fill(0)
      .map((_, i) => {
        const adjustedValue = i + 1;
        return (
          <label htmlFor="rating" key={adjustedValue}>
            <input
              type="radio"
              name="rating"
              onChange={(e) => setRating(e)}
              value={adjustedValue}
              // eslint-disable-next-line eqeqeq
              checked={adjustedValue == ratingValue}
              required
            />
            <FaStar color={adjustedValue <= ratingValue ? "#01af93" : "#bbb"} />
          </label>
        );
      })}
  </div>
);

export default StarRating;
