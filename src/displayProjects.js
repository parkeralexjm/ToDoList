export default function displayProjects(taskList) {
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