import './style.css';
import newTask from './task.js';
import getLocalStorage from './getLocalStorage.js';
import {displayProjects, displayTasks} from './display.js';
import addProject from './addProject'

// bind the event handler to the add project button
const addProjectButton = document.getElementsByClassName("addProject")
addProjectButton[0].addEventListener('click', addProject)

//newTask("TestTitle", "TestDesc", "TestDueDate", "lowPriority", "project 1", "task");
// Function updates the project list and task list
export function refresh() {
    displayTasks(getLocalStorage("task"));
    displayProjects(getLocalStorage("project"));
}

refresh()