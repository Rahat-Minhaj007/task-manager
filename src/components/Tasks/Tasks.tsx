import React, { useState } from "react";
import Done from "../Done/Done";
import Progress from "../Progress/Progress";
import Task from "../Task/Task";
import "./Tasks.scss";
interface ITasks {
  name: string;
  time: string;
}

const Tasks = () => {
  const [task, setTask] = useState<ITasks>({} as ITasks);
  const [taskList, setTaskList] = useState<ITasks[]>([]);
  const [start, setStart] = useState<ITasks[]>([]);
  const [done, setDone] = useState<ITasks[]>([]);

  console.log(task);
  console.log(taskList);
  console.log(start);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    setTask({
      name: "",
      time: "",
    });
  };

  const handleStart = (name: string) => {
    const newRemoveTaskList = taskList.filter((tk) => tk.name !== name);
    setTaskList(newRemoveTaskList);

    const newStartTaskList = taskList.filter((st) => st.name === name);
    setStart([...start, newStartTaskList[0]]);
  };

  const handleDone = (name: string) =>{
       const newRemoveStartList = start.filter((dn) => dn.name !== name);
       setStart(newRemoveStartList);

       const newRemoveDoneList = start.filter((don) => don.name === name);
       setDone([...done,newRemoveDoneList[0]]);

  }

  return (
    <div className="tasks">
      <div className="form">
        <input
          value={task.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Task Name"
        />
        <input
          value={task.time}
          onChange={handleChange}
          type="text"
          name="time"
          placeholder="10AM - 11AM"
        />
        <br />

        <button onClick={handleAdd} className="buttonAdd">
          ADD
        </button>
      </div>

      <div className="text-center">
        <h2>START</h2>
        {taskList.map((t) => (
          <Task
            name={t.name}
            time={t.time}
            key={t.name}
            handleStart={handleStart}
          />
        ))}
      </div>

      <div className="text-center">
        <h2>PROGRESS</h2>

        {start.map((str) => (
          <Progress name={str.name} time={str.time} key={str.name} handleDone={handleDone}/>
        ))}
      </div>

      <div className="text-center">
        <h2>DONE</h2>

       
         {
           done.map((d) =>  <Done name={d.name} time={d.time} key={d.name}/>)
         }
      
      </div>

    </div>
  );
};

export default Tasks;
