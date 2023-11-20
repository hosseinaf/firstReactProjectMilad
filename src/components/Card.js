import React, { Component } from "react";
import style from "../components/Card.module.css";

class Card extends Component {
  render() {
    const { img, name, cost } = this.props;
    return (
      <div className={style.container}>
        <img src={img} alt="extends" />
        <h3>{name}</h3>
        <p>{cost}</p>
      </div>
    );
  }
}

export default Card;
