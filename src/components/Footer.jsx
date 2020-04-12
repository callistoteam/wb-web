import React from 'react'

const Footer = props => {
    return(
      <div>
        <div class="ui inverted center aligned vertical footer segment" style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
          <div class="ui stackable grid">
            <div class="six wide left floared inverted column">
              <h4 class="ui inverted header">원더봇</h4>
              <p class="description">디스코드를 더 편하게.</p>
              <div class="ui inverted link list">
                
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">연락하기</h4>
              <div class="ui inverted link list">
                <a class="item" href="https://invite.gg/wonderbot" target="_blank"><i class="discord icon"></i>팀 칼리스토</a>

                <a class="item" href="https://discord.gg/u8AYWkH" target="_blank"><i class="discord icon"></i>StayCute</a>
               
              </div>
            </div>
            <div class="seven wide inverted column">
              <h4 class="ui inverted header">봇 사용에 어려움이 있으신가요?</h4>
              <p> 아래 버튼을 눌러 팀 칼리스토 디스코드에서 도움을 받으실 수 있습니다!</p>
              <form action="https://invite.gg/wonderbot" method="post" target="_top">
                
                <button type="submit" class="ui large teal button"><i class="discord icon"></i>팀 칼리스토 디스코드</button>
              </form>
            </div>
          </div>
          <div class="ui section divider"></div>
          

          <div class="ui horizontal small divided link list inverted">
            <a class="item">© 2017~2020 팀 칼리스토. 모든 권리 보유<br/><br/>© 2017~2020 Team. Callisto. All rights reserved</a>
          </div>
      </div>
      </div>
    )
}

export default Footer