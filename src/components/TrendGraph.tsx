/* eslint-disable react/prop-types */
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { IFeedbackList } from "../utils/interfaces";
import sma from "../utils/functions";
import CustomizedAxisTick from "./CustomizesAxisTick";

const TrendGraph: React.FC<IFeedbackList> = ({
  feedbackList,
}: IFeedbackList) => {
  const ratings = feedbackList.map((x) => x.rating);
  const smaFeedbackList = sma(ratings, 4);
  const chartData = [];

  for (let i = 0; i < ratings.length - 1; i += 1) {
    chartData.push({ rating: ratings[i], sma: smaFeedbackList[i] });
  }

  return (
    <LineChart
      width={400}
      height={400}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="id" tick={false} />
      <YAxis
        dataKey="rating"
        tick={CustomizedAxisTick}
        ticks={[0, 1, 2, 3, 4, 5]}
        domain={[0, 6]}
      />
      <Tooltip />
      <Line
        name="Rating per feedback"
        type="monotone"
        dataKey="rating"
        stroke="coral"
        dot={false}
      />
      <Line
        name="Moving average of every 4 ratings"
        type="monotone"
        dataKey="sma"
        stroke="slateblue"
        dot={false}
      />
      <Legend verticalAlign="top" height={36} />
    </LineChart>
  );
};

export default TrendGraph;
