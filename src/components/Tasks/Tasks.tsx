import React, { useState } from "react";
import Task from "../Task/Task";
import "./Tasks.scss";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  console.log(task);
  console.log(taskList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    setTask("");
  };

  return (
    <div className="tasks">
      <div className="form">
        
        <input
          value={task}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Task Name"
          
        />
        <input
          
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
        {taskList.map((task) => (
          <Task name={task} time="10AM - 11AM" key={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
