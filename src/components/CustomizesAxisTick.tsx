import React from "react";

const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={5} textAnchor="end">
        {Array(payload.value)
          .fill(0)
          .map((i) => "⭐️")}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
