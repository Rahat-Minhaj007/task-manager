import React from "react";
import "./Progress.scss";
interface IProgress {
  name: string;
  time?: string;
  handleDone: (name: string) => void;
 
}
const Progress = ({ name, time,handleDone}: IProgress) => {
  return (
    <div>
      <div className="progress-card ">
        <p>
          <strong>Task Name: </strong>
          {name}
        </p>
        <p>
          <strong>Time: </strong>
          {time}
        </p>
        <button className="btn btn-danger" onClick={() =>handleDone(name)}>
        DONE
        </button>
      </div>
    </div>
  );
};

export default Progress;
