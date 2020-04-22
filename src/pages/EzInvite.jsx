import React from "react";
import AdSense from 'react-adsense';

const EzInvite = () => {
  document.title = `원더봇 | 쉬운초대`;

  return (
    <div className="ui inverted center aligned container">
      <h1 className="ui inverted header">원더봇을 선택해주셔서 감사합니다!</h1>
      <p className="description">
        이곳은 쉬운 권한 초대입니다. 하단에 버튼을 클릭하시면, 필수 권한들로
        초대됩니다.
        <br />
        원하시는 권한을 지정하고 싶으신가요? <a href="/invite/custom">이곳</a>
        에서 권한을 지정하신 후 초대하세요!
      </p>
      <div className="ui inverted center aligned stackable container">
        <a
          className="ui long dash button"
          href="https://discordapp.com/oauth2/authorize?client_id=387548561816027138&scope=bot&permissions=2146958847&redirect_uri=https://wonderbot.xyz/invite/success"
          style={{ color: "white", background: "#7289DA", margin: "40px" }}
        >
          <i className="icon discord"></i> 자신 서버로 초대하기
        </a>
      </div>{" "}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
      <ins className="adsbygoogle"
     style={{ display: 'block'}}
     data-ad-client="ca-pub-4856582423981759"
     data-ad-slot="4402011066"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default EzInvite;
