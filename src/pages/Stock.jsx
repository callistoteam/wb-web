import React, { useState, useEffect } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

import fetch from 'node-fetch'
import config from '../config'
import Graph from '../components/Graph'

const GraphPage = props => {
    const [isLoading, setLoading] = useState(true)
    const [isPoped, setPop] = useState(true)
    const [stockData, setStockData] = useState('')
    const open = () => setPop(true)
    const close = () => {
        setPop(false)
        localStorage.stock = true
    }
   useEffect(() => {
    fetch(config.api + '/stocks/get').then(r=> r.json()).then(data=> {
        console.log(data)
        setStockData(data)
        

        setLoading(false)
    })
   }, [])
   var label = []
   var time = 0

    if(isLoading) {
        return(
            <div>로딩중...</div>
        )
    }
    return (
        <div>
            <h1 className='ui center inverted aligned header'>아이템 가격 추이</h1>
        {
            localStorage.stock ? ('') : (
            <Confirm
                open={isPoped}
                onCancel={close}
                onConfirm={close}
                cancelButton='필요없어요'
                confirmButton='읽고 왔습니다'
                content={(<div style={{fontSize: '15px'}}><br/>이 페이지에 처음이시죠? <br/>뭐가 뭔지 모르겠다면 <a href='https://support.callisto.team/docs/wonderbot/graph'>이곳</a>에서 확인해보세요.<br/></div>)}
                />
            )
        }
        
        <Graph data={{
            labels: stockData.label,
            datasets: stockData.stocks,
		}}/>
        <br/>
        </div>
    )
}


export default GraphPage

