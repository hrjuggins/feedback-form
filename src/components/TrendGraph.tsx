/* eslint-disable react/prop-types */
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { IFeedbackList } from "../utils/interfaces";
import sma from "../utils/functions";

const TrendGraph: React.FC<IFeedbackList> = ({
  feedbackList,
}: IFeedbackList) => {
  const ratings = feedbackList.map((x) => x.rating);
  const smaFeedbackList = sma(ratings, 4);
  const chartData = [];

  for (let i = 0; i < ratings.length; i += 1) {
    chartData.push({ rating: ratings[i], sma: smaFeedbackList[i] });
  }

  return (
    <ResponsiveContainer width="90%" height={300}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="id" tick={false} />
        <YAxis dataKey="rating" ticks={[1, 2, 3, 4, 5]} domain={[0, 6]} />
        <Tooltip />
        <Line
          name="Rating"
          type="monotone"
          dataKey="rating"
          stroke="orangered"
          dot={false}
        />
        <Line
          name="4 point moving average"
          type="monotone"
          dataKey="sma"
          stroke="slateblue"
          dot={false}
        />
        <Legend verticalAlign="bottom" align="right" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrendGraph;
