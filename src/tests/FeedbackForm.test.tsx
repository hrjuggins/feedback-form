import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FeedbackForm from "../components/FeedbackForm";
import "@testing-library/jest-dom/extend-expect";

describe("Name input", () => {
  it("Should capture name correctly onChange", () => {
    const addFeedback = jest.fn();
    render(<FeedbackForm addFeedback={addFeedback} />);

    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "Harry" },
    });

    expect(screen.getByTestId("name-input")).toHaveValue("Harry");
  });
});

describe("Email input", () => {
  it("Should capture email correctly onChange", () => {
    const addFeedback = jest.fn();
    render(<FeedbackForm addFeedback={addFeedback} />);

    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "harry@test.com" },
    });

    expect(screen.getByTestId("email-input")).toHaveValue("harry@test.com");
  });
});

describe("Message input", () => {
  it("Should capture comment correctly onChange", () => {
    const addFeedback = jest.fn();
    render(<FeedbackForm addFeedback={addFeedback} />);

    fireEvent.change(screen.getByTestId("message-input"), {
      target: { value: "Leaving feedback" },
    });

    expect(screen.getByTestId("message-input")).toHaveValue("Leaving feedback");
  });
});

describe("Rating input", () => {
  it("Should capture rating correctly onChange", () => {
    const addFeedback = jest.fn();
    render(<FeedbackForm addFeedback={addFeedback} />);

    fireEvent.click(screen.getByTestId("rating-input-5"));

    expect(screen.getByTestId("rating-input-5")).toBeChecked();
  });
});

describe("Submit feedback form", () => {
  it("Should submit the feedback form with the correct data", async () => {
    const addFeedback = jest.fn();
    render(<FeedbackForm addFeedback={addFeedback} />);

    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "Harry" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "harry@test.com" },
    });
    fireEvent.click(screen.getByTestId("rating-input-5"));
    fireEvent.change(screen.getByTestId("message-input"), {
      target: { value: "Leaving feedback" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    await waitFor(() => expect(addFeedback).toHaveBeenCalled());

    await waitFor(() =>
      expect(addFeedback).toHaveBeenCalledWith({
        name: "Harry",
        email: "harry@test.com",
        rating: 5,
        message: "Leaving feedback",
      })
    );
  });
});
