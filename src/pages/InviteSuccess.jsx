import React from 'react'
import {useHistory} from 'react-router-dom'
import Invite from './Invite'

const InviteSuccess = () => {
    const history = useHistory()
    const back = () => history.goBack()
    return(
        <div className="ui center aligned container">
            <h1 style={{fontSize: '10em'}} className="ui inverted header">초대성공!</h1>
            <h2 style={{fontSize: '2em'}} className="ui inverted header">서버에 원더봇이 추가되었어요!</h2>
            <h2 style={{fontSize: '1.5em'}} className="ui inverted header">아래 링크도 확인해보세요</h2>

            <a className="ui inverted primary button" href='/'><i className='icon discord'/>팀 칼리스토 디스코드</a>
            <a className="ui inverted orange button" onClick={back}><i className='icon arrow left'/>뒤로 가기</a>
            <br/>
            <p className='ui inverted header'>더 재밌는 디스코드. 원더봇</p>
        </div>
    )
}

export default InviteSuccess