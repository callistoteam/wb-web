import React from "react";
import { Link } from "react-router-dom";

const Dash = props => {
  console.log(props);
  return (
    <div className="ui container">
      <div className="ui positive message">
        <div className="header">해당 페이지는 개발중에 있습니다.</div>
        <p>죽기전엔 만나볼 수 있으니 그만 돌아가세요 ㅜ</p>
      </div>
      <h1 className="ui inverted header">On Development</h1>
    </div>
  );
};

export default Dash;
