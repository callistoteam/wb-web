import React from "react";
import { Line } from "react-chartjs-2";

const Graph = props => {
  return (
    <div>
      <Line data={props.data} />
    </div>
  );
};

export default Graph;
