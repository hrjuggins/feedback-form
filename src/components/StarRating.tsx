import React from "react";
import { FaStar } from "react-icons/fa";
import { IStarRating } from "../utils/interfaces";

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
          <div key={`rating-${adjustedValue}`}>
            <input
              aria-label={`rating-${adjustedValue}`}
              type="radio"
              name="rating"
              onChange={(e) => setRating(e)}
              value={adjustedValue}
              // eslint-disable-next-line eqeqeq
              checked={adjustedValue == ratingValue}
              required
              data-testid={`rating-input-${adjustedValue}`}
            />
            <FaStar color={adjustedValue <= ratingValue ? "#01af93" : "#bbb"} />
          </div>
        );
      })}
  </div>
);

export default StarRating;
