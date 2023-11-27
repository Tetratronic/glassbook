function taskList(){
    const tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    }

    const getTasks = () => tasks;

    return {addTask, getTasks};
}

export default taskList;

