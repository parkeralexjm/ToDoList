export function displayProjects(taskList) {
    const projectList = document.getElementsByClassName('projectList')
    // Clear the current projectList
    projectList[0].innerHTML = ''
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].type == "project") {
            //Add the projects to the project list DOM
            const projectTitle = document.createElement('li')
            projectTitle.classList.add("projectTitle")
            projectTitle.innerHTML = `<i class="fa-solid fa-diagram-project"></i>${taskList[i].title}`
            projectList[0].append(projectTitle)
        }
    }
}   

export function displayTasks(taskList) {
    const content = document.getElementsByClassName("content")
    content[0].innerHTML = ''
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].type == "task") {
            const taskLeftContainer = document.createElement('div')
            taskLeftContainer.id = "taskL" + (i + 1)
            taskLeftContainer.classList.add('taskLeftContainer')
            
            const taskRightContainer = document.createElement('div')
            taskRightContainer.id = 'taskR' + (i + 1)
            taskRightContainer.classList.add('taskRightContainer')
            
            const taskContainer = document.createElement('div')
            taskContainer.classList.add('taskContainer',`${taskList[i].priority}`)

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
}

export function displayProjectTasks(project) {

}