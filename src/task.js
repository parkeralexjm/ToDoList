export default function newTask(title, description, dueDate, priority, note) {
    const tempTask = new task(title, description, dueDate, priority, note)
    localStorage.setItem((localStorage.length +1) , JSON.stringify(tempTask))
}

function task(title, description, dueDate, priority, note) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.note = note
}