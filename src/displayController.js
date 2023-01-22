import * as projectController from './projectController.js';

const projectList = document.querySelector('#project-list');
const contentHeader = document.querySelector('#content-header');
const contentDescription = document.querySelector('#content-description');
const contentBody = document.querySelector('#content-body');
const newProjectBtn = document.querySelector('#newProjectBtn');
const newTaskBtn = document.querySelector('#newTaskBtn');

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
  const currentProject = projectController.getProject(projectName);
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
      const taskDescription = document.createElement('p');
      taskDescription.textContent = task.getDescription();
      const taskDueDate = document.createElement('p');
      taskDueDate.textContent = task.getDueDate();
      const editTaskBtn = document.createElement('button');
      editTaskBtn.textContent = 'Edit';
      const deleteTaskBtn = document.createElement('button');
      deleteTaskBtn.textContent = 'Delete';

      checkBox.addEventListener('change', (event) => {
        // Need to test
        task.toggleComplete();
        loadMainContent(projectName);
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
      return newCheckBox;
    }
  }
}

function loadTaskPopup() {
  const taskPopup = document.createElement('div');
  const taskForm = document.createElement('form');
  taskForm.setAttribute('id', 'task-form');

  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'task', 'task-name', 'New Task');
  const nameLabel = createLabel('Task Name', nameInput);

  const dateInput = document.createElement('input');
  setInputValues(dateInput, 'date', 'due-date', 'due-date');
  const dateLabel = createLabel('Due Date', 'due-date');

  const submitTaskBtn = document.createElement('button');
  submitTaskBtn.setAttribute('type', 'submit');
  submitTaskBtn.setAttribute('value', 'Submit');
  submitTaskBtn.textContent = 'Submit';

  taskForm.append(nameLabel, nameInput, dateLabel, dateInput, submitTaskBtn);

  taskPopup.append(taskForm);

  contentBody.append(taskPopup);

  function setInputValues(input, type, name, id, placeholder) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
  }

  function createLabel(text, inputName) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = inputName;
    return label;
  }
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
