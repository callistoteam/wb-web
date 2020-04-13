import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  const back = () => history.goBack();
  return (
    <div className="ui center aligned container">
      <h1 style={{ fontSize: "10em" }} className="ui inverted header">
        404
      </h1>
      <h2 style={{ fontSize: "2em" }} className="ui inverted header">
        이런! 길을 잘못 드셨어요.
      </h2>
      <a className="ui inverted primary button" href="/">
        <i className="icon home" />
        홈으로 돌아가기
      </a>
      <a className="ui inverted orange button" onClick={back}>
        <i className="icon arrow left" />
        뒤로 가기
      </a>
      <br />
      <p className="ui inverted header">이런..이런...이런....이런!!</p>
    </div>
  );
};

export default NotFound;
