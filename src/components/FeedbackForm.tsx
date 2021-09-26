import React, { useState } from "react";
import { IFeedbackFormProps } from "../utils/interfaces";
import StarRating from "./StarRating";

const FeedbackForm: React.FC<IFeedbackFormProps> = ({
  addFeedback,
}: IFeedbackFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
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
      message: "",
    });
    addFeedback(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} data-testid="form">
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormInput(e)}
          required
          data-testid="name-input"
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
          data-testid="email-input"
        />
      </label>
      <StarRating
        setRating={(e: React.SyntheticEvent) => handleFormInput(e)}
        ratingValue={formData.rating}
      />
      <label htmlFor="message">
        Comment
        <input
          id="message"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={(e) => handleFormInput(e)}
          required
          data-testid="message-input"
        />
      </label>
      <button type="submit" data-testid="form-submit">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
