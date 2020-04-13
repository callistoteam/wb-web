import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="ui inverted container">
      <nav>
        <div className="ui inverted secondary menu">
          <a className="ui active item" href="/">
            <img src="/logo.png" alt="Logo" width="100" />
            원더봇
          </a>
          <a className="item" href="/dash">
            대시보드
          </a>
          <div className="right menu">
            <div className="item">
              <a className="circular ui inverted button" href="/invite/custom">
                초대하기
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
