import React from 'react';
import './Task.scss'
interface ITask{
    name: string;
    time?: string;
    handleRemove: (name: string) => void;
}
const Task = ({name,time,handleRemove}:ITask) => {
    return (
        <div className="task-card">
            <p><strong>Task Name: </strong>{name}</p>
            <p><strong>Time: </strong>{time}</p>
            <button className="btn btn-danger" onClick={() => handleRemove(name)}>REMOVE</button>
            
        </div>
    );
};

export default Task;