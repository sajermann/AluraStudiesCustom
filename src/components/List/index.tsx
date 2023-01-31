import styles from "./index.module.scss";

export function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "03:00:00",
    },
  ];
  return (
    <aside className={styles.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <li className={styles.item} key={`${item.task}-${item.time}`}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
