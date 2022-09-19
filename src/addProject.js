import newTask from './task.js';
import { refresh } from './index.js';

export default function addProject() {
    // Create a div that will blur the background and apply it to obscure the page
    const blurBackground = document.createElement('div')
    blurBackground.classList.add("blurBackground")
    const body = document.getElementsByClassName("mainContainer")
    body[0].append(blurBackground)

    // Create a prompt on top of the blur to make a new overlay
    const newProjectContainer = document.createElement('div')
    newProjectContainer.classList.add('newProjectContainer')
    blurBackground.append(newProjectContainer)

    const newProjectForm = document.createElement('div')
    // Create a heading for the form
    const newProjectHeading = document.createElement('h3')
    newProjectHeading.textContent = 'Create new project'
    // Create a title input
    const newProjectTitle = document.createElement('input')
    newProjectTitle.type = 'text'
    newProjectTitle.placeholder = 'Project name'
    newProjectTitle.id = 'newProjectTitle'
    // Create a description input
    const newProjectDesc = document.createElement('textarea')
    newProjectDesc.rows = '4'
    newProjectDesc.cols = '40'
    newProjectDesc.placeholder = "Enter description here..."
    newProjectDesc.id = 'newProjectDesc'
    // Create a due date input
    const newProjectDueDate = document.createElement('input')
    newProjectDueDate.type = 'date'
    newProjectDueDate.id = 'newProjectDueDate'
        // Create a low priority input
    const newProjectLowPriority = document.createElement('input')
    newProjectLowPriority.type = 'radio'
    newProjectLowPriority.name = 'priority'
    newProjectLowPriority.value = 'low'
    newProjectLowPriority.id = 'low'
    // Create a mid priority input
    const newProjectMidPriority = document.createElement('input')
    newProjectMidPriority.type = 'radio'
    newProjectMidPriority.name = 'priority'
    newProjectMidPriority.value = 'mid'
    newProjectMidPriority.id = 'mid'
    // Create a high priority input
    const newProjectHighPriority = document.createElement('input')
    newProjectHighPriority.type = 'radio'
    newProjectHighPriority.name = 'priority'
    newProjectHighPriority.value = 'high'
    newProjectHighPriority.id = 'high'

    const newProjectSubmit = document.createElement('button')
    newProjectSubmit.type = 'submit'
    newProjectSubmit.textContent = 'Create project'
    newProjectSubmit.addEventListener('click', createProject)

    const newProjectCancel = document.createElement('button')
    newProjectCancel.type = 'submit'
    newProjectCancel.textContent = 'Cancel'
    newProjectCancel.addEventListener('click', clearForm)

    newProjectForm.append(newProjectHeading, 
                          newProjectTitle,
                          newProjectDesc,
                          newProjectDueDate,
                          newProjectLowPriority,
                          newProjectMidPriority,
                          newProjectHighPriority,
                          newProjectSubmit,
                          newProjectCancel
                          )

    newProjectContainer.append(newProjectForm)

}

function clearForm() {
    const element = document.getElementsByClassName('blurBackground')
    element[0].remove();
}

function createProject() {
    let radios = document.getElementsByName('priority')
    let priority = ''
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].value == 'low') {
            priority = 'low'
        } else if (radios[i].value == 'mid') {
            priority = 'mid'
        } else {
            priority = 'high'
        }
    }

    newTask(document.getElementById('newProjectTitle').value, 
            document.getElementById('newProjectDesc').value,
            document.getElementById('newProjectDueDate').value,
            priority, 
            'project')
    
    clearForm()
    refresh()
}