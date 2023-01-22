import * as projectController from './projectController.js';
import * as toDoItemModule from './todoListItem.js';

const projectList = document.querySelector('#project-list');
const contentHeader = document.querySelector('#content-header');
const contentDescription = document.querySelector('#content-description');
const contentBody = document.querySelector('#content-body');
const newProjectBtn = document.querySelector('#newProjectBtn');
const newTaskBtn = document.querySelector('#newTaskBtn');

let currentProject = null;

function setCurrentProject(projectName) {
  currentProject = projectController.getProject(projectName);
}

function loadSideBar() {
  loadProjects(projectController.getProjectNames());

  function loadProjects(projectNames) {
    projectNames.forEach((projectName) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project');
      projectElement.textContent = projectName;
      projectList.appendChild(projectElement);
    });
  }
}

function loadMainContent(projectName = 'General') {
  clearContent(contentBody);
  setCurrentProject(projectName);
  contentHeader.textContent = projectName;
  contentDescription.textContent = currentProject.getProjectDescription();

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-container');
  loadTasks(currentProject, taskList);
  contentBody.append(taskList);

  function loadTasks(project, parentUl) {
    const toDoArray = project.getToDoItems();
    toDoArray.forEach((task) => {
      const taskElement = document.createElement('li');
      const checkBox = createCheckBox(project, task);
      const taskName = document.createElement('h3');
      taskName.textContent = task.getTitle();
      taskName.classList.add('task-name');
      const taskDescription = document.createElement('p');
      taskDescription.classList.add('task-description');
      taskDescription.textContent = task.getDescription();
      const taskDueDate = document.createElement('p');
      taskDueDate.textContent = task.getDueDate();
      const editTaskBtn = document.createElement('button');
      editTaskBtn.textContent = 'Edit';
      const deleteTaskBtn = document.createElement('button');
      deleteTaskBtn.textContent = 'Delete';

      checkBox.addEventListener('change', (event) => {
        task.toggleComplete();
      });

      //   editTaskBtn.addEventListener('click', loadTaskEdit(task));
      //   function loadTaskEdit(taskToLoad) {}

      deleteTaskBtn.addEventListener('click', (event) => {
        console.log(project.getProjectTitle());
        // Access the project array and remove the item that matches the current task
        projectController.projectArray[
          projectController.projectIndex(project.getProjectTitle())
        ].removeToDoItem(task.getTitle());
        // projectController
        //   .getProject(project.getProjectTitle())
        //   .removeToDoItem(task.getTitle());

        loadMainContent(projectName);
      });

      taskElement.append(
        checkBox,
        taskName,
        taskDescription,
        taskDueDate,
        editTaskBtn,
        deleteTaskBtn
      );

      parentUl.appendChild(taskElement);
    });

    function createCheckBox(inputProject, inputTask) {
      const newCheckBox = document.createElement('input');
      newCheckBox.setAttribute('type', 'checkbox');
      newCheckBox.setAttribute(
        'id',
        `checkBox-${inputProject.getToDoIndex(inputTask.getTitle())}`
      );
      newCheckBox.setAttribute(
        'name',
        `checkBox-${inputProject.getToDoIndex(inputTask.getTitle())}`
      );
      newCheckBox.checked = inputTask.isComplete();
      return newCheckBox;
    }
  }
}

function loadTaskPopup() {
  newTaskBtn.setAttribute('disabled', true);

  const taskPopup = document.createElement('div');
  const taskForm = document.createElement('form');
  taskForm.setAttribute('id', 'task-form');

  // Task name input
  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'task', 'task-name', 'Task Name', true);
  const nameLabel = createLabel('Task Name', nameInput);

  // Task description input - TO ADD

  // Date Input
  const dateInput = document.createElement('input');
  setInputValues(dateInput, 'date', 'due-date', 'due-date');
  const dateLabel = createLabel('Due Date', 'due-date');

  // Priority Input - TO ADD

  const submitTaskBtn = document.createElement('button');
  submitTaskBtn.setAttribute('type', 'submit');
  submitTaskBtn.setAttribute('value', 'Submit');
  submitTaskBtn.textContent = 'Submit';

  taskForm.onsubmit = (event) => {
    event.preventDefault();
    // create to-do item
    const newToDoItem = toDoItemModule.toDoItem(
      nameInput.value,
      'placeholder description',
      dateInput.value,
      'placeholder priority',
      false
    );
    // add the task to the current project
    currentProject.addToDoItem(newToDoItem);
    console.log(currentProject.getProjectTitle);
    loadMainContent(currentProject.getProjectTitle());
    closeTaskPopup(taskPopup);
  };

  const closeTaskFormBtn = document.createElement('button');
  closeTaskFormBtn.setAttribute('type', 'button');
  closeTaskFormBtn.setAttribute('value', 'X');
  closeTaskFormBtn.textContent = 'X';
  closeTaskFormBtn.classList.add('top-right');
  closeTaskFormBtn.addEventListener('click', () => {
    closeTaskPopup(taskPopup);
  });

  taskForm.append(
    nameLabel,
    nameInput,
    dateLabel,
    dateInput,
    submitTaskBtn,
    closeTaskFormBtn
  );

  taskPopup.append(taskForm);

  contentBody.append(taskPopup);

  function setInputValues(
    input,
    type,
    name,
    id,
    placeholder,
    required = false
  ) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
    input.required = required;
  }

  function createLabel(text, inputName) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = inputName;
    return label;
  }
}

function closeTaskPopup(popup) {
  popup.remove();
  newTaskBtn.disabled = false;
}

function clearContent(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function loadDefaultEventListeners() {
  newTaskBtn.addEventListener('click', (event) => {
    loadTaskPopup();
  });
}

export { loadSideBar, loadMainContent, loadDefaultEventListeners };