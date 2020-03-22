import React from 'react'

const Home = props => {
    return (
        <div>
            <h1 className="ui inverted center aligned header">
              더 나은 디스코드.
            </h1>
            <p className="description">
                도박, 재미, 편리 3박자를 갖춘 100% 한국인 봇.<br/>디스코드가 깔려있다면 어느 서버든지 초대 후 사용하실 수 있습니다!<br/>간편하고 재미있는 삶을 살아요.
              </p>
          <br/>
        <div className="ui inverted center aligned stackable container">
            
        <a className="ui long dash button" href="/dash" style={{color: 'white', background: '#42B581'}}><i className="icon chart bar"></i> 대시보드로 바로가기</a>

        <a className="ui long dash button" href="/invite/custom" style={{color: 'white', background: '#7289DA', margin: '40px'}}><i className="icon discord"></i> 자신 서버로 초대하기</a>
 </div>
 </div>
    )
}

export default Home