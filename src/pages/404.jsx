import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const [EE, setE] = useState(0)
  const Up = () => {
    console.log('g')
    setE(EE+1)
  }
  const history = useHistory();
  const back = () => history.goBack();
  return (
    <div className="ui center aligned container">
      <h1 style={{ fontSize: "10em", color: EE >= 3 ? "red" : "white" }} className="ui inverted experiment-title header" onClick={Up}>
        {
          EE >= 3 ? '444' : '404'
        }
      </h1>
      <h2 style={{ fontSize: "2em" }} className="ui inverted header">
      {
          EE >= 3 ? '아마 길을 잘못든거겠죠??' : '이런! 길을 잘못 드셨어요.'
        }
      </h2>
      <a className="ui inverted primary button" href="/">
        <i className={EE >= 3 ? "vertically flipped icon home" : "icon home" } />
        {
          EE >= 3 ? '집으로 돌아갈 수 있을거 같니' : '홈으로 돌아가기'
        }
      </a>
      <a className="ui inverted orange button" onClick={back}>
        <i className="icon arrow left" />
        {
          EE >= 3 ? '저주에서 벗어나기' : '앞으로 가기'
        }
      </a>
      <br />
      <p className="ui inverted header"> {
          EE >= 3 ? '뒤 좀 보세요...ㅎㅎㅎ' : '이런...이런....이런....!!'
        }</p>
    </div>
  );
};

export default NotFound;
