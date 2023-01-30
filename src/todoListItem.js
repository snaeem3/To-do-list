import {
  format,
  isWithinInterval,
  isBefore,
  isSameDay,
  differenceInCalendarDays,
} from 'date-fns';

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
  const getRemainingDays = () => differenceInCalendarDays(dueDate, TODAY);
  const getPriority = () => priority;
  const isComplete = () => complete;
  const isHighPriority = () => priority === 'high';
  const isToday = () => isSameDay(TODAY, dueDate);
  const isTaskDueBefore = (date) => isBefore(dueDate, date); // if the task is due before the given date

  const setTitle = (value) => (title = value);
  const setDescription = (value) => (description = value);
  const setDueDate = (value) => {
    const date = new Date(value);
    dueDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
  };
  const setPriority = (value) => (priority = value);
  // const setComplete = (value) => (complete = value);
  const toggleComplete = () => (complete = !complete);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getRemainingDays,
    getPriority,
    isComplete,
    isHighPriority,
    isToday,
    isTaskDueBefore,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleComplete,
  };
};
