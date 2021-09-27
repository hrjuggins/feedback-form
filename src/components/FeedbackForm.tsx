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
    setFormData({
      ...formData,
      [target.name]:
        target.name === "rating" ? parseInt(target.value, 10) : target.value,
    });
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
    <form
      onSubmit={handleFormSubmit}
      data-testid="form"
      className="feedback-container"
    >
      <input
        aria-label="name"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleFormInput(e)}
        required
        data-testid="name-input"
      />
      <input
        aria-label="email"
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleFormInput(e)}
        required
        data-testid="email-input"
      />
      <StarRating
        setRating={(e: React.SyntheticEvent) => handleFormInput(e)}
        ratingValue={formData.rating}
      />
      <textarea
        aria-label="message"
        name="message"
        placeholder="Comment"
        rows={4}
        value={formData.message}
        onChange={(e) => handleFormInput(e)}
        required
        data-testid="message-input"
      />
      <button type="submit" data-testid="form-submit">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
