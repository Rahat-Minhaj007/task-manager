import React from 'react';
import './Task.scss'
interface ITask{
    name: string;
    time?: string;
}
const Task = ({name,time}:ITask) => {
    return (
        <div className="task-card">
            <p><strong>Task Name: </strong>{name}</p>
            <p><strong>Time: </strong>{time}</p>
            
        </div>
    );
};

export default Task;