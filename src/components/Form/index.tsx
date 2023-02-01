import React from "react";
import { v4 as uuidv4 } from 'uuid'

import { ITask } from "../../interfaces/ITask";
import { Button } from "../Button";

import styles from "./index.module.scss";

export class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
    selected: false,
    completed: false,
  };

  handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((prev) => [
      ...prev,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);

    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render(): React.ReactNode {
    return (
      <form className={styles.newTask} onSubmit={this.handleAddTask.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">Adicione um novo Estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
            required
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step={1}
            name="tempo"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            id="tempo"
            placeholder="O que você quer estudar?"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button chidren="Adicionar" type="submit" />
      </form>
    );
  }
}
