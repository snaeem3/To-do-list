// const title = '';
// const description = '';
// const dueDate = '';
// const priority = '';

// function createToDoItem(title, description, dueDate, priority) {
//   setTitle(title);
//   setDescription(description);
//   setDueDate(dueDate);
//   setPriority(priority);
// }

// export { createToDoItem };

export const toDoItem = (
  title,
  description,
  dueDate,
  priority,
  complete = false
) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getComplete = () => complete;

  const setTitle = (value) => (title = value);
  const setDescription = (value) => (description = value);
  const setDueDate = (value) => (dueDate = value);
  const setPriority = (value) => (priority = value);
  // const setComplete = (value) => (complete = value);
  const toggleComplete = () => (complete = !complete);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getComplete,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleComplete,
  };
};
