import React from "react";

const Home = props => {
  return (
    <div>
      <h1 className="ui inverted center aligned header">더 나은 디스코드.</h1>
      <p className="description">
        도박, 편리, 관리 3박자를 갖춘 100% 한국인을 위한 디스코드 봇.
        <br />
        디스코드가 이용중이라면 어느 서버든지 초대 후 사용하실 수 있습니다!
        <br />
        간편하고 재미있는 삶을 살아요.
      </p>
      <br />
      <div className="ui inverted center aligned stackable container" style={{paddingBottom: '400px'}}>
        <a
          className="ui long dash button"
          href="/dash"
          style={{ color: "white", background: "#42B581" }}
        >
          <i className="icon chart bar"></i> 대시보드로 바로가기
        </a>

        <a
          className="ui long dash button"
          href="/invite/custom"
          style={{ color: "white", background: "#7289DA" }}
        >
          <i className="icon discord"></i> 자신 서버로 초대하기
        </a>
      </div>
      <div className="ui divider"/>
      <div className="ui stackable grid" >
      <div className="nine wide column">
        <h1 className="ui inverted header">서버를 깨끗하게.</h1>
        <div className="desc">밴, 킥 기능은 물론이고 경고 기능도 존재합니다.<br/>경고 한도 이상의 경고가 누적되면 자동 밴처리됩니다.<br/>서버를 깔끔하게 관리하세요.</div>
      </div>
        <div className="seven wide column">      
        <img className="ui image" alt="Warn" src="/images/warn.png" /> 
      </div>
      
      </div>
      <br/>
      <div className="ui divider"/>
      <br/>
      <div className="ui stackable grid">
        <div className="ten wide column">      
        <img className="ui image" alt="Slot" src="/images/slot.gif" /> 
      </div>
      <div className="six wide column">
        <h1 className="ui inverted header">중독성 있는 도박.</h1>
        <div className="desc">가상화폐를 이용한 다양한 도박 명령어를 사용할 수 있습니다.<br/>디스코드에서 작은 카지노를 만나보세요.</div>
      </div>
      </div>
      <br/>
      <div className="ui divider"/>
      <br/>
      <div className="ui stackable grid">
        
      <div className="six wide column" >
        <h1 className="ui inverted header">시도때도 없이 변하는 아이템시장.</h1>
        <div className="desc">아이템의 가격은 계속 변경됩니다. <br/>현실의 시세와 비슷하죠. 저렴할 때 구매해서, 가격이 올랐을 때 판매하여 큰 수익을 내보세요!<br/>이 뿐만 아니라 가격 변화 뉴스로 볼 수도 있습니다!<br/>즐거운 디스코드를 만나보세요</div>
      </div>
      <div className="ten wide column" style={{}}>      
        <img className="ui right floated image" alt="Item" src="/images/item.png" /> 
      </div>
      </div>
      <br/>
      <div className="ui divider"/>
      <br/>
      <div className="ui stackable grid">
        <div className="ten wide column">      
        <img className="ui image" alt="delivery" src="/images/delivery.png" /> 
      </div>
      <div className="six wide column">
        <h1 className="ui inverted header">유용하지만 편리함.</h1>
        <div className="desc">택배 명령어뿐만 아니라 환율 기능과 원소기호 등 유용한 기능을 디스코드에서 만나보세요</div>
      </div>
      </div>
      <br/>
      <div className="ui divider"/>
      <br/>
      <div className="ui stackable grid">
      <div className="seven wide column">
        <h1 className="ui inverted header">시즌 명령어</h1>
        <div className="desc">코로나때는 마스크와 선별진료소, 올림픽때는 순위 기능 등 시즌에 맞는 다양한 명령어가 계속 업데이트 됩니다!<br/>따로 다른 봇이 필요없이 다양한 기능을 통합하여 서비스하고 있습니다.<br/>다양한 기능을 만나보세요.</div>
      </div>
        <div className="nine wide column">      
        <img className="ui image" alt="mask" src="/images/mask.png" /> 
      </div>
      
      </div>
    <br/><br/>
    </div>
  );
};

export default Home;

