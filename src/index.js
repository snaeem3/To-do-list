import './styles.css';
import { format, isWithinInterval, addDays } from 'date-fns';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';
import * as projectController from './projectController.js';
import * as displayController from './displayController';
import { project1, project2, project3 } from './sampleProjects.js';

// const toDoItem1 = toDoItemModule.createToDoItem(
//   'buy food',
//   'eggs and milk',
//   '2/1/23',
//   'high'
// );

// const toDoItem1 = toDoItemModule.toDoItem(
//   'buy groceries',
//   'eggs and milk',
//   new Date('2023-02-02'),
//   'low',
//   true
// );

// const toDoItem2 = toDoItemModule.toDoItem(
//   'clean kitchen',
//   'microwave and oven',
//   new Date('2023-04-30'),
//   'medium',
//   false
// );

// const toDoItem3 = toDoItemModule.toDoItem(
//   'feed dog',
//   'bone',
//   // new Date('2023-01-30'),
//   addDays(new Date(), -4),
//   'high',
//   true
// );

// To do item tests
//
// console.log(toDoItem1);
// console.log(toDoItem1.getTitle());
// toDoItem1.setTitle('eat cookie');
// console.log(toDoItem1.getTitle());
// console.log(toDoItem1.getComplete());
// toDoItem1.toggleComplete();
// if (toDoItem1.getComplete()) {
//   console.log('complete');
// } else {
//   console.log('incomplete');
// }

// Project tests
//
// const project1 = projectModule.project();
// console.log(project1.getProjectTitle());
// project1.setProjectTitle('weekend');
// console.log(project1.getProjectTitle());
// console.log(`num projects: ${project1.numTasks()}`);
// project1.addToDoItem(toDoItem1);
// project1.addToDoItem(toDoItem2);
// project1.addToDoItem(toDoItem3);
// console.log(`num projects: ${project1.numTasks()}`);
// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);
// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);

// project1.removeToDoItem('b');
// console.log(`num projects: ${project1.numProjects()}`);
// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);
// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);

// Project Controller tests
//
// const project1 = projectModule.project();
// const project2 = projectModule.project(
//   'Home projects',
//   'Description of project #2',
//   []
// );
// projectController.addProject(project1);
// projectController.addProject(project2);
// // console.table(projectController.getProjectNames());
// const completedTasks =
//   projectController.getAllCompletedTasks().completedTaskArray;
// console.log(completedTasks);
// completedTasks.forEach((task) => {
//   console.log(task.getTitle());
// });

// Date tests
// const TODAY = new Date();
// const ONE_WEEK_FROM_TODAY = addDays(TODAY, 7);
// console.log(format(ONE_WEEK_FROM_TODAY, 'yyyy-MM-dd'));
// console.log(
//   `${toDoItem3.getDueDate()}: ${toDoItem3.isTaskDueBefore(ONE_WEEK_FROM_TODAY)}`
// );
// console.log(`is date today: ${toDoItem1.isToday()}`);
// console.log(`Days until task 3 is due: ${toDoItem3.getRemainingDays()}`);
// console.log(`Today: ${TODAY}`);
// console.log(toDoItem1.isOverDue());

// Sort tests
// const sortedTasks = project1.getPrioritySortedTasks();
// sortedTasks.forEach((task) => {
//   console.log(`${task.getTitle()} has a priority of ${task.getPriority()}`);
// });

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  //   const projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];
  //   projectArray.forEach((project) => {
  //     projectController.addProject(project);
  //   });
} else {
  // Too bad, no localStorage for us
}
projectController.addProject(project1);
projectController.addProject(project2);
projectController.addProject(project3);

projectController.addGeneralProject();
displayController.loadSideBar();
displayController.loadMainContentProjects('General');
displayController.loadDefaultEventListeners();
// displayController.loadTaskPopup();

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
