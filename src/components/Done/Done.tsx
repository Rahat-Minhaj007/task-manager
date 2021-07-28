import React from "react";
import "./Done.scss";
interface IDone {
  name: string;
  time?: string;
}
const Done = ({ name, time }: IDone) => {
  return (
    <div>
      <div className="done-card">
        <p>
          <strong>Task Name: </strong>
          {name}
        </p>
        <p>
          <strong>Time: </strong>
          {time}
        </p>
      </div>
    </div>
  );
};

export default Done;
