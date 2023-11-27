import Task from "./task";
import taskList from "./taskList";


const dialog = document.querySelector(".dialogform");

const form = document.getElementById("todoform");

const confirmbtn = document.getElementById("confirmBtn");

const addTaskBtn = document.createElement("button");

let list = taskList()

addTaskBtn.addEventListener("click", ()=>{
    dialog.showModal();
})

document.body.appendChild(addTaskBtn);

confirmbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let formdata = new FormData(form);
    let data = [...formdata.values()];
    list.addTask(new Task(...data));
    console.log(list.getTasks()[0].title);
});
