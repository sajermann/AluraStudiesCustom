import { useState } from "react";
import { Cron } from "../components/Cron";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { ITask } from "../interfaces/ITask";
import styles from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>()

  function handleSelectTask(taskSelected: ITask){
    setSelected(taskSelected);
    setTasks(prev=> prev.map(taskPrev =>({
      ...taskPrev,
      selected: taskPrev.id === taskSelected.id
    })))
  }

  function conclusionTask(){
    if(selected){
      setTasks(prev=> prev.map(taskPrev =>{
        if(taskPrev.id === selected.id){
          return {
            ...taskPrev,
            selected: false,
            completed: true
          }
        }
        return taskPrev
      }))
      setSelected(undefined)
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} 
      handleSelectTask={handleSelectTask}
      />
      <Cron selected={selected} conclusionTask={conclusionTask} />
    </div>
  );
}

export default App;
