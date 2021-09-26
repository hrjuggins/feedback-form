import React from "react";
import { FaStar } from "react-icons/fa";
import { IStarRating } from "../utils/interfaces";

const StarRating: React.FC<IStarRating> = ({
  ratingValue,
  setRating,
}: IStarRating) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 5; i >= 0; i -= 1) {
      const adjustedValue = i + 1;
      stars.push(
        <label
          htmlFor={`rating-${adjustedValue}`}
          key={`rating-${adjustedValue}`}
          className="star-icon"
        >
          <FaStar color={adjustedValue <= ratingValue ? "#30af5f" : "#bbb"} />
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
        </label>
      );
    }
    return stars;
  };
  return <div className="rating-container">{renderStars()}</div>;
};

export default StarRating;
