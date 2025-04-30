let tasks = []  //creates an empty array that will store the tasks

function displayTasks(){ //Function that display each task in the array "tasks"
    let taskmanager = document.getElementById("taskmanager")
    taskmanager.innerHTML = ""

    tasks.forEach(function(task) { //Iterates over each task in tasks and displays it's contents.
        let taskD = document.createElement("div")
        taskD.innerHTML = `<p> ${task.name}--------------------Priority: ${task.priority}--------------------${task.date} <button id = isDone>Done</button> <button id = delete>Delete</button>`
        taskmanager.appendChild(taskD)
    })
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