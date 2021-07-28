import React from 'react';
import './Task.scss'
interface ITask{
    name: string;
    time?: string;
    handleStart: (name: string) => void;
}
const Task = ({name,time,handleStart}:ITask) => {
    return (
        <div className="task-card ">
           
            <p><strong>Task Name: </strong>{name}</p>
            <p><strong>Time: </strong>{time}</p>
            <button className="btn btn-success" onClick={() => handleStart(name)}>START</button>
            
        </div>
    );
};

export default Task;