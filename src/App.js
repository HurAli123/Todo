import "./App.css";

import Task from "./components/Task";
import CustomAlert from './components/Alert';

import { useState } from "react";
import create from "./sounds/create.mp3"
import exitsound from "./sounds/close.mp3"
import click from "./sounds/click.mp3"
import notification from "./sounds/notification.mp3"


//.................................................................................................................................
const App = () => {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const showAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const [total, setTotal] = useState(0);
  const [complete, setComplete] = useState(0);

  const [message,setMessage] = useState("")
  const [tasks, setTasks] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [color, setColor] = useState("White");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited

  const openDialog = (index) => {

    const createaudio = new Audio(create)
    

    if (typeof index === "number") {
      // Edit mode: set the task's values in the dialog
      const taskToEdit = tasks[index];
      setTitle(taskToEdit.title);
      setParagraph(taskToEdit.paragraph);
      setColor(taskToEdit.color);
      setEditIndex(index);
    } else {
      // Add mode: clear the form fields
      setTitle("");
      setParagraph("");
      setColor("");
      setEditIndex(null);
    }

    setShowDialog(true);
  };

  const closeDialog = () => {
    const exit = new Audio(exitsound)
    exit.play()
    setShowDialog(false);
  };

  const handleAddOrUpdateTask = () => {

    if(title!=="" && paragraph!==""){
    const newTask = {
      title: title,
      paragraph: paragraph,
      color: color===""?"White":color,
    };

    if (editIndex !== null) {
      
      // Edit mode: update the task in the array
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      // Add mode: add the new task to the array
      setTasks([...tasks, newTask]);
      setTotal(total + 1);
    }

    // Clear input fields and edit mode
    setTitle("");
    setParagraph("");
    setColor("");
    setEditIndex(null);

    // Close the dialog
    closeDialog();
  }
  else{
    const notificationsound = new Audio(notification)
    notificationsound.play()  
    setTimeout(()=>{
      
  if(title==="" && paragraph==="")
  {
    setMessage(<>Please enter a <b>Title</b> and <b>description</b></>)
    showAlert()
  }
  else if(title===""){
    setMessage(<><b>Please enter a <b></b>Title</b></>)
    showAlert()
  }
  else {
    setMessage(<>Please enter a <b>Description</b></>)
    showAlert()
  }

    },100)
}
  };

  const handleborder = (e) => {
    e.target.previousSibling.style.border = "4px solid black ";
    const exit = new Audio(exitsound)
    exit.play()
  };

  return (
    <>
    

      <div className="main">
        <div className="aside mobile-navbar">
          <div className="logo">
            <a href="/">
              <span>T</span>oDo
            </a>
          </div>

          <div className="create">
            <button className="button" onClick={openDialog}>
              <i className="fa fa-plus"></i><span>Create New Task</span>
            </button>
          </div>

          <div className="info-parent">
            <div className="info">
              <span className="text"> Total Tasks : </span>
              <span className="num">{total}</span>
            </div>
            <div className="info">
              <span className="text"> Completed Tasks : </span>
              <span className="num">{complete}</span>
            </div>
            <div className="info">
              <span className="text"> Pending Tasks : </span>
              <span className="num">{total - complete}</span>
            </div>
          </div>
        </div>

        <div className={`main-container`}>
        {isAlertOpen && (
        <CustomAlert
          message={message}
          onClose={closeAlert}
        />
      )}
          <div
            className={`blur  ${showDialog ? "blurred-background" : ""}`}
          ></div>
          {showDialog && (
            <div className="dialog">
              <h2>{editIndex !== null ? "Edit Task" : "Add Task"}</h2>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>{ setTitle(e.target.value)
                  const clicksound = new Audio(click)
                  clicksound.play()
                }}
              />
              <textarea
                rows={8}
                placeholder="Description"
                value={paragraph}
                onChange={(e) => {setParagraph(e.target.value)
                  const clicksound = new Audio(click)
                  clicksound.play()
                }}
              />
              <h6>Color</h6>
              <div className="colors">
                <div className="radio">
                  <span className="bg-radio" id="rd-white"></span>
                  <input
                    type="radio"
                    id="white"
                    name="color"
                    value="white"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-blue"></span>
                  <input
                    type="radio"
                    id="blue"
                    name="color"
                    value="#3da1ff"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-yellow"></span>
                  <input
                    type="radio"
                    id="yellow"
                    name="color"
                    value="#f5f17a"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-red"></span>
                  <input
                    type="radio"
                    id="red"
                    name="color"
                    value="#ff6e6e"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-pink"></span>
                  <input
                    type="radio"
                    id="pink"
                    name="color"
                    value="#ff99e6"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-green"></span>
                  <input
                    type="radio"
                    id="green"
                    name="color"
                    value="#8cff9c"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-purple"></span>
                  <input
                    type="radio"
                    id="purple"
                    name="color"
                    value="#c375ff"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="bg-radio" id="rd-grey"></span>
                  <input
                    type="radio"
                    id="grey"
                    name="color"
                    value="lightgrey"
                    onClick={handleborder}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleAddOrUpdateTask}
              >
                {editIndex !== null ? "Edit" : "Add"}
              </button>
              <button className="btn btn-danger" onClick={closeDialog}>
                Cancel
              </button>
            </div>
          )}

          <div className="tasks">
            {tasks.map((task, index) => (
              <Task
                total={total}
                setTotal={setTotal}
                complete={complete}
                setComplete={setComplete}
                editTask={() =>{  
                  openDialog(index)}}
                key={index}
                title={task.title}
                paragraph={task.paragraph}
                color={task.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
//.................................................................................................................................

export default App;
