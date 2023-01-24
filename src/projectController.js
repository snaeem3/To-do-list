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

export {
  projectArray,
  getProjectArray,
  getProjectNames,
  getProject,
  addProject,
  deleteProject,
  projectIndex,
  getAllCompletedTasks,
};
