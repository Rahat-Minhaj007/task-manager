import React, { useState } from "react";
import Task from "../Task/Task";
import "./Tasks.scss";
interface ITasks {
  name: string;
  time: string;
}

const Tasks = () => {
  const [task, setTask] = useState<ITasks>({} as ITasks);
  const [taskList, setTaskList] = useState<ITasks[]>([]);

  console.log(task);
  console.log(taskList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const check =   setTask({...task,[e.target.name]: e.target.value });
        console.log(check);
        
  };

  const handleAdd = () => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    setTask({
      name: "",
      time: "",
    });
  };

  const handleRemove = (name: string) => {
      const newRemoveTaskList = taskList.filter(tk => tk.name !== name)
      setTaskList(newRemoveTaskList);
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
      <div>
        {taskList.map((t) => (
          <Task name={t.name} time={t.time} key={t.name} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
