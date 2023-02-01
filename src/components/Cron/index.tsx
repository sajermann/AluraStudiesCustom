import { useEffect, useState } from "react";
import { ITask } from "../../interfaces/ITask";
import { timeToSeconds } from "../../utils/timeToSeconds";
import { Button } from "../Button";
import { Clock } from "./Clock";
import styles from "./index.module.scss";

export function Cron({
  selected,
  conclusionTask,
}: {
  selected?: ITask;
  conclusionTask: () => void;
}) {
  const [time, setTime] = useState(timeToSeconds(selected?.time || "00:00:00"));
  useEffect(() => {
    setTime(timeToSeconds(selected?.time || "00:00:00"));
  }, [selected]);

  function handleStart(count: number) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return handleStart(count - 1);
      }
      conclusionTask();
    }, 1000);
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock time={time} />
      </div>

      <Button onClick={() => handleStart(time)} chidren="Começar" />
    </div>
  );
}
