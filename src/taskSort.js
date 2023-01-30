export default function getPrioritySortedTasks(unsortedTasksArray) {
  const prioritySortedArray = [...unsortedTasksArray].sort(
    (a, b) =>
      priorityToNumber(a.getPriority()) - priorityToNumber(b.getPriority())
  ); // [...arr] added to prevent modification to original array

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
