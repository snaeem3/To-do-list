// import * as toDoItemModule from './todoListItem.js';

export const project = (
  projectTitle = 'Project',
  projectDescription = 'Project Description',
  toDoArray = []
) => {
  const getProjectTitle = () => projectTitle;
  const getProjectDescription = () => projectDescription;
  const getToDoItems = () => toDoArray;

  const setProjectTitle = (title) => (projectTitle = title);
  const setProjectDescription = (description) =>
    (projectDescription = description);
  const setToDoArray = (array) => (toDoArray = array);

  const addToDoItem = (toDoItem) => toDoArray.push(toDoItem);
  const removeToDoItem = (itemName) =>
    toDoArray.splice(getToDoIndex(itemName), 1);

  function getToDoIndex(name) {
    for (let i = 0; i < numTasks(); i += 1) {
      if (toDoArray[i].getTitle() === name) {
        return i;
      }
    }
    return -1;
  }

  const numTasks = () => toDoArray.length;

  function getCompletedTasks() {
    const completedTasks = [];
    for (let i = 0; i < numTasks(); i += 1) {
      if (toDoArray[i].isComplete()) {
        completedTasks.push(toDoArray[i]);
      }
    }
    return completedTasks;
  }

  function getIncompletedTasks() {
    const incompleteTasks = [];
    for (let i = 0; i < numTasks(); i += 1) {
      if (!toDoArray[i].isComplete()) {
        incompleteTasks.push(toDoArray[i]);
      }
    }
    return incompleteTasks;
  }

  function getHighPriorityTasks() {
    const highPriorityTasks = [];
    for (let i = 0; i < numTasks(); i += 1) {
      if (toDoArray[i].isHighPriority()) {
        highPriorityTasks.push(toDoArray[i]);
      }
    }
    return highPriorityTasks;
  }

  function getTodayTasks() {
    const todayTasks = [];
    for (let i = 0; i < numTasks(); i += 1) {
      if (toDoArray[i].isToday()) {
        todayTasks.push(toDoArray[i]);
      }
    }
    return todayTasks;
  }

  return {
    getProjectTitle,
    getProjectDescription,
    getToDoItems,
    setProjectTitle,
    setProjectDescription,
    setToDoArray,
    addToDoItem,
    removeToDoItem,
    getToDoIndex,
    numTasks,
    getCompletedTasks,
    getIncompletedTasks,
    getHighPriorityTasks,
    getTodayTasks,
  };
};
