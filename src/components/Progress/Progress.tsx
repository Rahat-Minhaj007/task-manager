import React from "react";
import "./Progress.scss";
interface IProgress {
  name: string;
  time?: string;
 
}
const Progress = ({ name, time}: IProgress) => {
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
        <button className="btn btn-danger" >
        DONE
        </button>
      </div>
    </div>
  );
};

export default Progress;
