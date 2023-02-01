import { ITask } from "../../../interfaces/ITask";
import styles from "./index.module.scss";

interface IProps extends ITask {
  handleSelectTask: (dasta: ITask) => void;
}

export function Item({
  completed,
  id,
  selected,
  task,
  time,
  handleSelectTask,
}: IProps) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.selectedItem : ""} ${
        completed ? styles.completedItem : ""
      }`}
      onClick={() => !completed && handleSelectTask({ completed, id, selected, task, time })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={styles.completed} aria-label="Tarefa Completada" />
      )}
    </li>
  );
}
