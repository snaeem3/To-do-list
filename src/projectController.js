import * as projectModule from './project.js';

const projectArray = [];

function getProjectArray() {
  return projectArray;
}

function getProjectNames() {
  // Output array of strings that are the names of each project
  return projectArray.map((project) => project.getProjectTitle());
}

function getProject(projectTitle) {
  return projectArray.find(
    (project) => project.getProjectTitle() === projectTitle
  );
}

function addProject(project) {
  projectArray.push(project);
}

function addGeneralProject() {
  addProject(
    projectModule.project(
      'General',
      'Keep track of your general tasks here!',
      []
    )
  );
}

function deleteProject(projectName) {
  projectArray.splice(projectIndex(projectName), 1);
}

function projectIndex(projectName) {
  return projectArray.findIndex(
    (project) => project.getProjectTitle() === projectName
  );
}

function getAllCompletedTasks() {
  const completedTaskArray = [];
  const projectIndex = [];
  for (let i = 0; i < projectArray.length; i++) {
    const completedTasks = projectArray[i].getCompletedTasks();
    completedTaskArray.push(...completedTasks); // appends completedTasks to completedTaskArray
    const indexTimesNumTasks = new Array(completedTasks.length).fill(i);
    projectIndex.push(...indexTimesNumTasks); // appends indexTimesNumTasks to projectIndex
  }

  return { completedTaskArray, projectIndex };
}

function getAllHighPriorityTasks() {
  const highPriorityTaskArray = [];
  const projectIndex = [];
  for (let i = 0; i < projectArray.length; i++) {
    const highPriorityTasks = projectArray[i].getHighPriorityTasks();
    highPriorityTaskArray.push(...highPriorityTasks); // appends highPriorityTasks to highPriority
    const indexTimesNumTasks = new Array(highPriorityTasks.length).fill(i);
    projectIndex.push(...indexTimesNumTasks); // appends indexTimesNumTasks to projectIndex
  }
  return { highPriorityTaskArray, projectIndex };
}

function getAllTodayTasks() {
  const todayTaskArray = [];
  const projectIndex = [];
  for (let i = 0; i < projectArray.length; i++) {
    const todayTasks = projectArray[i].getTodayTasks();
    todayTaskArray.push(...todayTasks); // appends todayTasks to todayTaskArray
    const indexTimesNumTasks = new Array(todayTasks.length).fill(i);
    projectIndex.push(...indexTimesNumTasks); // appends indexTimesNumTasks to projectIndex
  }
  return { todayTaskArray, projectIndex };
}

function getAllBeforeTasks(date) {
  const beforeTaskArray = [];
  const projectIndex = [];
  for (let i = 0; i < projectArray.length; i++) {
    const beforeTasks = projectArray[i].getBeforeTasks(date);
    beforeTaskArray.push(...beforeTasks); // appends beforeTasks to beforeTaskArray
    const indexTimesNumTasks = new Array(beforeTasks.length).fill(i);
    projectIndex.push(...indexTimesNumTasks); // appends indexTimesNumTasks to projectIndex
  }
  return { beforeTaskArray, projectIndex };
}

export {
  projectArray,
  getProjectArray,
  getProjectNames,
  getProject,
  addProject,
  addGeneralProject,
  deleteProject,
  projectIndex,
  getAllCompletedTasks,
  getAllHighPriorityTasks,
  getAllTodayTasks,
  getAllBeforeTasks,
};
