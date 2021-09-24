import React, { useState } from "react";
import { IFeedbackFormProps } from "../utils/interfaces";
import StarRating from "./StarRating";

const FeedbackForm: React.FC<IFeedbackFormProps> = ({
  addComment,
}: IFeedbackFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const handleFormInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      rating: 0,
      comment: "",
    });
    addComment(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormInput(e)}
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormInput(e)}
          required
        />
      </label>
      <StarRating
        setRating={(e: React.SyntheticEvent) => handleFormInput(e)}
        ratingValue={formData.rating}
      />
      <label htmlFor="comment">
        Comment
        <input
          id="comment"
          type="textarea"
          name="comment"
          value={formData.comment}
          onChange={(e) => handleFormInput(e)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
