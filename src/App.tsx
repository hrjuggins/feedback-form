import React, { useState, useEffect } from "react";
import Comments from "./components/Comments";
import FeedbackForm from "./components/FeedbackForm";
import TrendGraph from "./components/TrendGraph";
import initialData from "./utils/initialData";
import { IFeedback } from "./utils/interfaces";

const App: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>(initialData);

  const addFeedback = (data: IFeedback) => {
    setFeedbackList((prev) => [...prev, data]);
    localStorage.setItem(
      "feedbackList",
      JSON.stringify([...feedbackList, data])
    );
  };

  useEffect(() => {
    const stateFromLocalStorage = localStorage.getItem("feedbackList");
    if (stateFromLocalStorage) {
      setFeedbackList(JSON.parse(stateFromLocalStorage));
    } else {
      setFeedbackList(initialData);
      localStorage.setItem("feedbackList", JSON.stringify(initialData));
    }
  }, []);

  return (
    <main className="container">
      <h1>Customer Feedback Form</h1>
      <div className="container-top">
        <FeedbackForm addFeedback={(data: IFeedback) => addFeedback(data)} />
        <TrendGraph feedbackList={feedbackList} />
      </div>
      <Comments comments={feedbackList} />
    </main>
  );
};

export default App;
