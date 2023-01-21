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

  return {
    getProjectTitle,
    getProjectDescription,
    getToDoItems,
    setProjectTitle,
    setProjectDescription,
    setToDoArray,
    addToDoItem,
    removeToDoItem,
    numTasks,
  };
};
