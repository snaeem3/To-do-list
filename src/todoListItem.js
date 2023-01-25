import { format, isWithinInterval } from 'date-fns';

const TODAY = new Date();

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
  const isComplete = () => complete;
  const isHighPriority = () => priority === 'high';

  const setTitle = (value) => (title = value);
  const setDescription = (value) => (description = value);
  const setDueDate = (value) => (dueDate = new Date(value));
  const setPriority = (value) => (priority = value);
  // const setComplete = (value) => (complete = value);
  const toggleComplete = () => (complete = !complete);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    isComplete,
    isHighPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleComplete,
  };
};
