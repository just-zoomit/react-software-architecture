import React from "react";
import styles from "./index.module.css";
import Card from "./Card";

import data from "./API/data.json";

export default class Index extends React.Component {
    static async getInitialProps() {
        return {
            cards: data
        }
    }
  render() {
    return (
      <div className={styles.app}>
        <hearder className={styles.header}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
        </hearder>
        <div className={styles.grid}>
        {
         
          this.props.cards.map((card) => (
            <Card key={card.id} />
         ))
        }
        </div>
      </div>
    );
  }
}
