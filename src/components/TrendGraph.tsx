import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { IComments } from "../interfaces";

const TrendGraph: React.FC<IComments> = ({ comments }: IComments) => (
  <LineChart
    width={400}
    height={250}
    data={comments}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="id" />
    <YAxis dataKey="rating" domain={[0, 5]} />
    <Tooltip />
    <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
  </LineChart>
);

export default TrendGraph;
