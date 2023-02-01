import React from "react";
import styles from "./index.module.scss";

export class Button extends React.Component<{
  onClick?: () => void;
  chidren: React.ReactNode;
  type?: "button" | "submit" | "reset";
}> {
  render(): React.ReactNode {
    return (
      <button
        className={styles.button}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.chidren}
      </button>
    );
  }
}
