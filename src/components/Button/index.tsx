import React from "react";
import styles from './index.module.scss'

export class Button extends React.Component {
  render(): React.ReactNode {
    const backgroundColor = "red";
    return <button className={styles.button}>Botão</button>;
  }
}
