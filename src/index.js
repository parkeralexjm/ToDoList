import './style.css';
import newTask from './task.js';
import storageAvailable from './storage';
import getLocalStorage from './getLocalStorage.js';
import displayAllTasks from './displayAllTasks.js';
import displayProjects from './displayProjects.js';
import addProject from './addProject'
import newProject from './project';

// bind the event handler to the add project button
const addProjectButton = document.getElementsByClassName("addProject")
addProjectButton[0].addEventListener('click', addProject)

//newTask("TestTitle", "TestDesc", "TestDueDate", "lowPriority", "project");
export function refresh() {
    displayAllTasks(getLocalStorage());
    displayProjects(getLocalStorage());
}

refresh()
// storageAvailable('localStorage')