import React, { Component } from "react";
import Card from "./Card";
import iphonex from "../images/iphonex.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jpg";
import style from "../components/Cards.module.css";

class Cards extends Component {
  render() {
    return (
      <div className={style.container}>
        <Card img={iphonex} name="Iphone X" cost="500 $"></Card>
        <Card img={iphone11} name="Iphone 11" cost="600 $"></Card>
        <Card img={iphone12} name="Iphone 12" cost="700 $"></Card>
        <Card img={iphone13} name="Iphone 13" cost="800 $"></Card>
      </div>
    );
  }
}

export default Cards;
