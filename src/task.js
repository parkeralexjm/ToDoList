export default function newTask(title, description, dueDate, priority, type) {
    const tempTask = new task(title, description, dueDate, priority, type)
    localStorage.setItem((localStorage.length +1) , JSON.stringify(tempTask))
}

function task(title, description, dueDate, priority, type) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.type = type
}