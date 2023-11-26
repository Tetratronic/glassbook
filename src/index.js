import Task from "./task";
import rendertask from "./DOMmanipulation";
import './style.css';
import openForm from "./modalForm";

const tasklist = [];
function addTask(t,d,date,p){
    const task = new Task(t,d,date,p)
    tasklist.push(task);
    document.body.appendChild(rendertask(task));
}

const open = document.createElement("button");
open.textContent = "OPEN"

confirmBtn.addEventListener("click",(event) =>{
    event.preventDefault();
    const formdata = new FormData(document.getElementById("todoform"));
    const data = [...formdata.values()];
    addTask(...data);
})

open.addEventListener("click", ()=>{
    openForm();
});

document.body.appendChild(open);


