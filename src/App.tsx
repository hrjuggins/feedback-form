import React, { useState } from "react";
import Comments from "./components/Comments";
import FeedbackForm from "./components/FeedbackForm";
import TrendGraph from "./components/TrendGraph";
import initialData from "./utils/initialData";
import { IComment } from "./utils/interfaces";

const App: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>(initialData);

  const addComment = (data: IComment) => {
    setComments((prev) => [...prev, data]);
  };

  return (
    <div className="container">
      <FeedbackForm addComment={(data: IComment) => addComment(data)} />
      <TrendGraph comments={comments} />
      <Comments comments={comments} />
    </div>
  );
};

export default App;
