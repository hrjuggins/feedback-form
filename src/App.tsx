import React, { useState } from "react";
import Comments from "./components/Comments";
import FeedbackForm from "./components/FeedbackForm";
import TrendGraph from "./components/TrendGraph";
import initialData from "./utils/initialData";
import { IFeedback } from "./utils/interfaces";

const App: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>(initialData);

  const addFeedback = (data: IFeedback) => {
    setFeedbackList((prev) => [...prev, data]);
  };

  return (
    <main className="container">
      <h1>Customer Feedback Form</h1>
      <FeedbackForm addFeedback={(data: IFeedback) => addFeedback(data)} />
      <TrendGraph feedbackList={feedbackList} />
      <Comments comments={feedbackList} />
    </main>
  );
};

export default App;
