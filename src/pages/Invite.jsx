import React from "react";

const Invite = props => {
  document.title = `원더봇 | 초대하기`;
  return (
    <div className="ui inverted center aligned container">
      <h1 className="ui inverted header">원더봇을 선택해주셔서 감사합니다!</h1>
      <p className="description">
        이곳은 커스텀 권한 초대입니다. 하단에 버튼을 누르시면 권한 선택 페이지로
        연결됩니다.
        <br />
        뭐가 뭔지 모르겠나요? <a href="/invite/ez">이곳</a>에서 추천 권한으로
        초대하세요!
      </p>

      <a
        className="ui long dash button"
        href="https://invite.wonderbot.xyz"
        style={{ color: "white", background: "#7289DA", margin: "40px" }}
      >
        <i className="icon discord"></i> 커스텀 초대하기
      </a>
    </div>
  );
};

export default Invite;
