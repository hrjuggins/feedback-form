import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FeedbackForm from "../components/FeedbackForm";
import "@testing-library/jest-dom/extend-expect";

describe("Name input", () => {
  it("Should capture name correctly onChange", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFeedback = jest.fn((value) => {});
    render(<FeedbackForm addFeedback={addFeedback} />);

    const input = screen.getByTestId("name-input");
    fireEvent.change(input, { target: { value: "Harry" } });

    expect(screen.getByTestId("name-input")).toHaveValue("Harry");
  });
});

describe("Email input", () => {
  it("Should capture email correctly onChange", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFeedback = jest.fn((value) => {});
    render(<FeedbackForm addFeedback={addFeedback} />);

    const input = screen.getByTestId("email-input");
    fireEvent.change(input, { target: { value: "harry@test.com" } });

    expect(screen.getByTestId("email-input")).toHaveValue("harry@test.com");
  });
});

describe("Message input", () => {
  it("Should capture comment correctly onChange", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFeedback = jest.fn((value) => {});
    render(<FeedbackForm addFeedback={addFeedback} />);

    const input = screen.getByTestId("message-input");
    fireEvent.change(input, { target: { value: "Leaving feedback" } });

    expect(screen.getByTestId("message-input")).toHaveValue("Leaving feedback");
  });
});

describe("Rating input", () => {
  it("Should capture rating correctly onChange", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFeedback = jest.fn((value) => {});
    render(<FeedbackForm addFeedback={addFeedback} />);

    const input = screen.getByTestId("rating-input-5");
    fireEvent.click(input);

    expect(screen.getByTestId("rating-input-5")).toBeChecked();
  });
});

describe("Form submit", () => {
  it("Should submit the form", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFeedback = jest.fn((value) => {});
    render(<FeedbackForm addFeedback={addFeedback} />);
    fireEvent.submit(screen.getByTestId("form"));
    expect(addFeedback).toHaveBeenCalled();
  });
});
