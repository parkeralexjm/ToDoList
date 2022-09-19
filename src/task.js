export default function newTask(title, description, dueDate, priority, project, type) {
    const tempTask = new task(title, description, dueDate, priority, project, type)
    localStorage.setItem((localStorage.length +1) , JSON.stringify(tempTask))
}

function task(title, description, dueDate, priority, project, type) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.type = type
    this.project = project
}

