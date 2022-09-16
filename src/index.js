import './style.css';
import newTask from './task.js';
import storageAvailable from './storage';
import getLocalStorage from './getLocalStorage.js';
import displayAllTasks from './displayAllTasks.js';


//newTask("TestTitle", "TestDesc", "TestDueDate", "highPriority", "TestNote");

displayAllTasks(getLocalStorage())

// storageAvailable('localStorage')