export default function newProject(title) {
    const tempProject = new project(title)
    localStorage.setItem((localStorage.length + 1), JSON.stringify(tempProject))
}

function project(title) {
    this.title = title
    this.type = 'project'
}