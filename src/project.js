// import * as toDoItemModule from './todoListItem.js';

export const project = (
  projectTitle = 'Project',
  projectDescription = 'Project Description',
  color = '#000000',
  toDoArray = []
) => {
  const getProjectTitle = () => projectTitle;
  const getProjectDescription = () => projectDescription;
  const getToDoItems = () => toDoArray;
  const getColor = () => color;

  const setProjectTitle = (title) => (projectTitle = title);
  const setProjectDescription = (description) =>
    (projectDescription = description);
  const setToDoArray = (array) => (toDoArray = array);
  const setColor = (newColor) => (color = newColor);

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

  function getBeforeTasks(date) {
    const beforeTasks = [];
    for (let i = 0; i < numTasks(); i += 1) {
      if (toDoArray[i].isTaskDueBefore(date)) {
        beforeTasks.push(toDoArray[i]);
      }
    }
    return beforeTasks;
  }

  function getPrioritySortedTasks() {
    const prioritySortedArray = toDoArray.sort(
      (a, b) =>
        priorityToNumber(a.getPriority()) - priorityToNumber(b.getPriority())
    );

    return prioritySortedArray;

    function priorityToNumber(priority) {
      if (priority === 'high') {
        return -1;
      }
      if (priority === 'medium') {
        return 0;
      }
      return 1;
    }
  }

  function getToDoStorageArray() {
    const storageArray = [];
    for (let i = 0; i < numTasks(); i += 1) {
      storageArray[i] = {
        taskTitle: toDoArray[i].getTitle(),
        taskDescription: toDoArray[i].getDescription,
        taskDueDate: toDoArray[i].getDueDate(),
        taskPriority: toDoArray[i].getPriority(),
        taskCompleteStatus: toDoArray[i].isComplete(),
      };
    }
    return storageArray;
  }

  return {
    getProjectTitle,
    getProjectDescription,
    getToDoItems,
    getColor,
    setProjectTitle,
    setProjectDescription,
    setToDoArray,
    setColor,
    addToDoItem,
    removeToDoItem,
    getToDoIndex,
    numTasks,
    getCompletedTasks,
    getIncompletedTasks,
    getHighPriorityTasks,
    getTodayTasks,
    getBeforeTasks,
    // getPrioritySortedTasks,
    getToDoStorageArray,
  };
};
