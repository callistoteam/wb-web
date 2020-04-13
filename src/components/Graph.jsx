import React from "react";
import { Line } from "react-chartjs-2";

const Graph = props => {
  return (
    <div>
      <Line data={props.data} />ㅎ
    </div>
  );
};

export default Graph;
