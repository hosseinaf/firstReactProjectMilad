import React, { Component } from "react";
import style from "../components/Logo.module.css";
import apple from "../images/apple.png";
import sumsung from "../images/samsung_logo_PNG14.png";
import xiaomi from "../images/xiami.png";

const Logo = () => {
  return (
    <div className={style.container}>
      <h1 className="support">Who supported us?</h1>
      <div>
        <img src={apple} alt="xx"></img>
        <img src={sumsung} alt="xx"></img>
        <img src={xiaomi} alt="xx"></img>
      </div>
    </div>
  );
};

export default Logo;
