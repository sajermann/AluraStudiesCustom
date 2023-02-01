import { Item } from "./Item";
import { ITask } from "../../interfaces/ITask";

import styles from "./index.module.scss";

interface IProps {
  tasks: ITask[];
  handleSelectTask: (data: ITask) => void;
}

export function List({ tasks, handleSelectTask }: IProps) {
  return (
    <aside className={styles.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={`${item.id}`} {...item} handleSelectTask={handleSelectTask} />
        ))}
      </ul>
    </aside>
  );
}
