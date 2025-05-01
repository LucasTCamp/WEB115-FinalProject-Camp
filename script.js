let tasks = []  //creates an empty array that will store the tasks

function displayTasks(){ //Function that display each task in the array "tasks"
    let taskmanager = document.getElementById("taskmanager")
    taskmanager.innerHTML = ""

    tasks.forEach(function(task) { //Iterates over each task in tasks and displays it's contents.
        let taskD = document.createElement("div")
        if (task.isImportant) taskD.classList.add("important") //adds to classlist so it can be edited in css
        if (task.isCompleted) taskD.classList.add("completed")

        taskD.innerHTML = `<p> ${task.name}--------------------Priority: ${task.priority}--------------------${task.date} 
        <button onclick = "updateCompletion(${task.id})">Done</button> <button onclick = "deleteTask(${task.id})">Delete</button></p>`
        
        taskmanager.appendChild(taskD)
    })
}

function updateCompletion(id) { //Function used so that when the buttion "Done" is clicked, it will switch the isCompleted key to the opposite in the task object. Eg. if the task was already marked as completed, then it would be changed to false if clicked again.
    let task = tasks.find(t => t.id === id); //Finds task with matching id.
    task.isCompleted =! task.isCompleted; //Swaps key value from true/false
    displayTasks()
    console.log(JSON.stringify(tasks,null,2))
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id) //Deletes the tasks
    displayTasks()
    console.log(JSON.stringify(tasks,null,2))
}
//gets all the info given when the user clicks Add task and creates an object out of it.
document.getElementById("addTask").addEventListener("click", function() {
    
    let taskName = document.getElementById("taskName").value
    let priority = document.getElementById("priority").value
    let Importance = document.getElementById("Importance").checked
    let date = new Date().toLocaleDateString()
    
    if (!taskName) return alert("THE TASK NAME IS EMPTY") //This makes sure the user doesn't just add something with no task. 
    
    let task = { 
        id: tasks.length + 1, //It gets the current length of the array and adds 1 so every task has an unique id.
        name: taskName,
        priority: priority,
        isImportant: Importance,
        isCompleted: false,
        date: date
    }

    tasks.push(task) //Adds the task that the user recently submitted into the array "tasks"
    displayTasks()
    console.log(JSON.stringify(tasks, null, 2)) //Prints in console the JSON version of the objects in the array tasks.
});