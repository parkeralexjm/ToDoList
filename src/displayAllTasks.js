export default function displayAllTasks(taskList) {
    const content = document.getElementsByClassName("content")
    for (let i = 0; i < taskList.length; i++) {
        const taskLeftContainer = document.createElement('div')
        taskLeftContainer.id = "taskL" + (i + 1)
        taskLeftContainer.classList.add('taskLeftContainer')
        
        const taskRightContainer = document.createElement('div')
        taskRightContainer.id = 'taskR' + (i + 1)
        taskRightContainer.classList.add('taskRightContainer')
        
        const taskContainer = document.createElement('div')
        taskContainer.classList.add('taskContainer',`${taskList[i].priority}`)

        //taskPriority.classList.add(`${taskList[i].priority}`)
        const taskTitle = document.createElement('h3')
        taskTitle.textContent = taskList[i].title
        taskTitle.classList.add('taskTitle')

        const taskDescription = document.createElement('p')
        taskDescription.textContent = taskList[i].description
        taskDescription.classList.add('taskDesc')

        const taskDueDate = document.createElement('p')
        taskDueDate.textContent = taskList[i].dueDate
        taskDueDate.classList.add('taskDueDate')

        const taskDelete = document.createElement('i')
        taskDelete.classList.add('fa-solid', 'fa-delete-left')

        taskLeftContainer.append(taskTitle, taskDescription)
        taskRightContainer.append(taskDueDate, taskDelete)
        taskContainer.append(taskLeftContainer, taskRightContainer)
        content[0].append(taskContainer)
    }
}