export default function displayAllTasks(taskList) {
    const content = document.getElementsByClassName("content")
    for (let i = 0; i < taskList.length; i++) {
        const taskContainer = document.createElement('div')
        taskContainer.id = "task" + (i + 1)
        taskContainer.classList.add('taskContainer', `${taskList[i].priority}`)
        //taskPriority.classList.add(`${taskList[i].priority}`)
        const taskTitle = document.createElement('h3')
        taskTitle.textContent = taskList[i].title

        const taskDescription = document.createElement('p')
        taskDescription.textContent = taskList[i].description

        const taskDueDate = document.createElement('p')
        taskDueDate.textContent = taskList[i].dueDate

        
    
        const taskNote = document.createElement('p')
        taskNote.textContent = taskList[i].note
        
        taskContainer.append(taskTitle, taskDescription, taskDueDate, taskNote)
        content[0].append(taskContainer)
    }
}