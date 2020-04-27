import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import AdSense from 'react-adsense';

import config from "../config";

const Shards = () => {
  document.title = `원더봇 | 샤드 정보`;
  const [Info, setInfo] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    fetch(config.api + "/shards")
      .then(r => r.json())
      .then(data => {
        setInfo(data.data);

        setLoading(false);
      });
  }, []);

  return (
    <div className="ui inverted center aligned container">
      <h1 className="ui inverted header">샤드 정보</h1>
      <p className="description">원더봇 샤드 프로세스 정보들입니다.</p>
      <p style={{ color: "gray" }}>
        샤드란? 원더봇의 사용량을 분산시켜주기위해, 일정한 서버 수 단위로
        프로세스를 분리시켜둔 것입니다.
      </p>
      <br />
      <p className="description">
        이 페이지는 자동 새로고침이 되지 않습니다. 수동으로 새로고침하여 새로운
        정보를 확인하세요
      </p>
      <div className="ui inverted center aligned stackable container">
        <div class="ui three stackable cards">
          {Info.length !== 0 ? (
            <>
              {Info.map(el => {
                return (
                  <a class="ui fluid card project">
                    <div class="content">
                      <div class="center aligned header">
                        <i className="server icon" /> #{el.id} 샤드
                      </div>
                      <div class="center aligned description">
                        <p>
                          <i className="icon home" />
                          핸들중인 길드: {el.guilds} 길드
                        </p>
                        <p>
                          <i className="icon users" />
                          핸들중인 유저: {el.users} 유저
                        </p>
                        <p>
                          <i className="icon time" />
                          평균 지연시간: {el.ping} ms
                        </p>
                        <p>
                          <i className="icon microchip" />
                          메모리 사용량: {el.memory} MB
                        </p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div
                        class="center aligned author"
                        style={{ color: "black" }}
                      >
                        상태:{" "}
                        {new Date() - el.lastupdate * 1000 > 120000 ? (
                          <a style={{ color: "red" }}>
                            <i className="icon x" />
                            응답 없음
                          </a>
                        ) : (
                          <a style={{ color: "green" }}>
                            <i className="icon check" />
                            정상
                          </a>
                        )}
                      </div>
                    </div>
                  </a>
                );
              })}
            </>
          ) : (
            <div>정보 가져오는 중...</div>
          )}
        </div>
      </div>{" "}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div align="center">
      <ins className="adsbygoogle"
     style={{ display: 'block'}}
     data-ad-client="ca-pub-4856582423981759"
     data-ad-slot="4402011066"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      </div>
      <br/><br/>
    </div>
  );
};

export default Shards;
