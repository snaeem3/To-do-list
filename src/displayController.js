import * as projectController from './projectController.js';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';

const body = document.querySelector('body');
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
  clearContent(projectList);
  loadProjects(projectController.getProjectNames());

  function loadProjects(projectNames) {
    projectNames.forEach((projectName) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('project-name-btn');
      projectBtn.textContent = projectName;
      projectBtn.addEventListener('click', () => {
        setCurrentProject(projectName);
        loadMainContent(projectName);
      });

      projectElement.appendChild(projectBtn);
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

      editTaskBtn.addEventListener('click', (event) => {
        loadTaskPopup(task);
      });

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

function loadProjectPopup(project) {
  newProjectBtn.setAttribute('disabled', true);

  const projectPopup = document.createElement('div');
  const projectForm = document.createElement('form');
  projectForm.setAttribute('id', 'project-form');

  const nameInput = document.createElement('input');
  setInputValues(
    nameInput,
    'text',
    'project-name',
    'project-name',
    'Project Name',
    true
  );
  const nameLabel = createLabel('Project Name', nameInput);

  const descriptionInput = document.createElement('textarea');
  setInputValues(
    descriptionInput,
    'text',
    'descriptionInput',
    'descriptionInput',
    'Project Description',
    false
  );
  const descriptionLabel = createLabel('Project Description', descriptionInput);

  const submitProjectBtn = createSubmitBtn();

  projectForm.onsubmit = (event) => {
    console.log(`Form submitted`);
    event.preventDefault();
    const newProject = projectModule.project(
      nameInput.value,
      descriptionInput.value
    );

    if (project === undefined) {
      console.warn('No project given');
      projectController.addProject(newProject);
    } else {
      projectController.projectArray[
        projectController.projectIndex(currentProject)
      ] = newProject;
    }

    loadSideBar();
    closePopup(projectPopup);
  };
  const closeProjectFormBtn = createCloseFormBtn(projectPopup);

  projectForm.append(
    nameLabel,
    nameInput,
    descriptionLabel,
    descriptionInput,
    submitProjectBtn,
    closeProjectFormBtn
  );
  projectPopup.append(projectForm);
  body.append(projectPopup);
}

function loadTaskPopup(task) {
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

  // if an input task was given (edit button clicked)
  if (task !== undefined) {
    nameInput.value = task.getTitle();
    dateInput.value = task.getDueDate();
  }

  const submitTaskBtn = createSubmitBtn();

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
    if (task === undefined) {
      // add the task to the current project
      currentProject.addToDoItem(newToDoItem);
    } else {
      // update the task in the current project
      // OTHER TASK DATA TO ADD
      task.setTitle(nameInput.value);
      task.setDueDate(dateInput.value);
    }
    console.log(currentProject.getProjectTitle);
    loadMainContent(currentProject.getProjectTitle());
    closePopup(taskPopup);
  };

  const closeTaskFormBtn = createCloseFormBtn(taskPopup);

  taskForm.append(
    nameLabel,
    nameInput,
    dateLabel,
    dateInput,
    submitTaskBtn,
    closeTaskFormBtn
  );

  taskPopup.append(taskForm);

  body.append(taskPopup);
}

function setInputValues(input, type, name, id, placeholder, required = false) {
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

function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.textContent = 'Submit';
  return submitBtn;
}

function createCloseFormBtn(parentPopup) {
  const closePopupBtn = document.createElement('button');
  closePopupBtn.setAttribute('type', 'button');
  closePopupBtn.setAttribute('value', 'X');
  closePopupBtn.textContent = 'X';
  closePopupBtn.classList.add('top-right');
  closePopupBtn.addEventListener('click', () => {
    closePopup(parentPopup);
  });
  return closePopupBtn;
}

function closePopup(popup, btn) {
  popup.remove();
  // btn.disabled = false;
  enableAllButtons();
}

function enableAllButtons() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = false;
  });
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

  newProjectBtn.addEventListener('click', (event) => {
    loadProjectPopup();
  });
}

export { loadSideBar, loadMainContent, loadDefaultEventListeners };
