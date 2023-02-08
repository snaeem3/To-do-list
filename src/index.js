import './styles.css';
// import { format, isWithinInterval, addDays } from 'date-fns';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';
import * as projectController from './projectController.js';
import * as displayController from './displayController';
import { project1, project2, project3 } from './sampleProjects.js';

if (storageAvailable('localStorage')) {
  if (localStorage.length === 0) {
    projectController.addProject(project1);
    projectController.addProject(project2);
    projectController.addProject(project3);

    projectController.addGeneralProject();
  }

  const projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];
  // Add each project to project controller
  projectArray.forEach((projectData) => {
    const taskData = projectData.projectItems;
    const toDoArray = [];
    // Add each task to toDoArray
    taskData.forEach((taskDataItem) => {
      toDoArray.push(
        toDoItemModule.toDoItem(
          taskDataItem.taskTitle,
          taskDataItem.taskDescription,
          new Date(taskDataItem.taskDueDate),
          taskDataItem.taskPriority,
          taskDataItem.taskCompleteStatus
        )
      );
    });
    const project = projectModule.project(
      projectData.projectTitle,
      projectData.projectDescription,
      projectData.projectColor,
      toDoArray
    );

    projectController.addProject(project);
  });
} else {
  console.warn('No local storage available');
  projectController.addProject(project1);
  projectController.addProject(project2);
  projectController.addProject(project3);

  projectController.addGeneralProject();
}

displayController.loadSideBar();
displayController.loadMainContentProjects('General');
displayController.loadDefaultEventListeners();

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
