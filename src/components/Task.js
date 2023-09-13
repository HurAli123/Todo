import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

export default function Task(props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [opacity, setOpacity] = useState(0); // Initialize opacity to 1 (fully opaque)

  const handletick = () => {
    setOpacity(opacity === 0 ? 0.9 : 0.9); // Toggle between 0.5 (semi-transparent) and 1 (fully opaque)
  };

  const handleclick = (event) => {
    event.target.closest(".task").remove();
    props.setTotal(props.total - 1);
    isButtonDisabled === true
      ? props.setComplete(props.complete - 1)
      : props.setComplete(props.complete);
  };

  const handlecomplete = (event) => {
    setStatus("Completed");
    event.target.closest(".task").style.background = "#21e60b";
    // event.target.closest(".task").style.opacity = "0.6"
    handletick();
    props.setComplete(props.complete + 1);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <div class="task" style={{ background: props.color }}>
        <div className="check" style={{ opacity }}>
          <i className="fa fa-check"></i>
        </div>
        <div class="top">
          <div class="modify">
            <button
              disabled={isButtonDisabled}
              onClick={handlecomplete}
              class="complete btn btn-success"
            >
              {status === "Pending" ? "Complete" : "Completed"}
            </button>
            <button class="edit btn btn-danger" onClick={props.editTask}>
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
          </div>
          <button class="delete" onClick={handleclick}>
            <i
              class="fa-solid fa-circle-xmark"
              style={{ color: "#ff0000" }}
            ></i>
          </button>
        </div>
        <div class="middle">
          <h3>{props.title}</h3>
          <p> {props.paragraph}</p>
        </div>
        <div
          class="bottom"
          style={{ color: status === "Pending" ? "black" : "white" }}
        >
          Status :{" "}
          <span class="status">
            <b>{status + " "}</b>
            <i
              class={
                status === "Pending" ? "fa-regular fa-clock" : "fa fa-check"
              }
              style={{ color: "#ff0000 " }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
}
