let TaskName = document.getElementById("TaskName")
let Priority = document.getElementById("Priority")
let Importance = document.getElementById("Importance")
let AddTask = document.getElementById("AddTask")
let Results = document.getElementById("taskmanager")

AddTask.addEventListener("click", function() {
    
    let output = document.createElement('p')
    output.innerHTML= `${TaskName}                Priority: ${Priority}       ${Date()}`
    Results.appendChild(output)
    console.log(JSON.stringify(tasks));
});