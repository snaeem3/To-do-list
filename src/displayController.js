import { format, isWithinInterval, addDays, isValid } from 'date-fns';
import * as projectController from './projectController.js';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';

const body = document.querySelector('body');
const projectList = document.querySelector('#project-list');
const projectInfo = document.querySelector('#project-info');
const contentHeader = document.querySelector('#content-header');
const contentDescription = document.querySelector('#content-description');
const editProjectBtn = document.querySelector('#edit-project-btn');
const deleteProjectBtn = document.querySelector('#delete-project-btn');
const hideCompletedInput = document.querySelector('#hide-completed');
const contentBody = document.querySelector('#content-body');
const generalBtn = document.querySelector('#generalBtn');
const highPriorityBtn = document.querySelector('#highPriorityBtn');
const todayBtn = document.querySelector('#todayBtn');
const upcomingBtn = document.querySelector('#upcomingBtn');
const completedBtn = document.querySelector('#completedBtn');
const newProjectBtn = document.querySelector('#newProjectBtn');
const newTaskBtn = document.querySelector('#newTaskBtn');

let currentProject = null;
// Parameters for remembering recent main content load when editing task
let recentTaskParams = null;
let recentType = 'project';

function setCurrentProject(projectName) {
  currentProject = projectController.getProject(projectName);
  // currentProject = projectName;
}

function loadSideBar() {
  clearContent(projectList);
  loadSideBarProjects(projectController.getProjectNames());

  function loadSideBarProjects(projectNames) {
    projectNames.forEach((projectName) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('project-name-btn');
      projectBtn.textContent = projectName;
      projectBtn.addEventListener('click', () => {
        setCurrentProject(projectName);
        loadMainContentProjects(projectName);
        setReloadContentBody('project');
      });

      projectElement.appendChild(projectBtn);

      // Do not add General button to Projects list
      if (projectName !== 'General') {
        projectList.appendChild(projectElement);
      }
    });
  }
}

function loadMainContentProjects(
  projectName = 'General',
  hideCompleted = false
) {
  clearContent(contentBody);
  newTaskBtn.style.display = 'block';
  editProjectBtn.style.display = 'block';
  deleteProjectBtn.style.display = 'block';
  setCurrentProject(projectName);

  // Hide edit and delete project buttons if 'General'
  if (projectName === 'General') {
    deleteProjectBtn.style.display = 'none';
    editProjectBtn.style.display = 'none';
  }

  // Populate header and description
  contentHeader.textContent = projectName;
  contentDescription.textContent = currentProject.getProjectDescription();

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-container');
  loadTasks(currentProject, taskList);
  contentBody.append(taskList);

  function loadTasks(project, parentUl) {
    const toDoArray = hideCompleted
      ? project.getIncompletedTasks()
      : project.getToDoItems();
    toDoArray.forEach((task) => {
      const {
        taskElement,
        checkBox,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        editTaskBtn,
        deleteTaskBtn,
      } = createTaskElements(task, project);

      // editTaskBtn.addEventListener('click', (event) => {
      //   loadTaskPopup(task);
      // });

      deleteTaskBtn.addEventListener('click', (event) => {
        console.log(project.getProjectTitle());
        // Access the project array and remove the item that matches the current task
        projectController.projectArray[
          projectController.projectIndex(project.getProjectTitle())
        ].removeToDoItem(task.getTitle());

        loadMainContentProjects(projectName);
      });

      taskElement.append(
        checkBox,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        editTaskBtn,
        deleteTaskBtn
      );

      parentUl.appendChild(taskElement);
    });
  }
}

function loadMainContentTasks(
  headerText,
  descriptionText,
  tasks,
  associatedProject // array of project indices associated with tasks
) {
  clearContent(contentBody);
  newTaskBtn.style.display = 'none';
  editProjectBtn.style.display = 'none';
  deleteProjectBtn.style.display = 'none';
  // Populate header and description
  contentHeader.textContent = headerText;
  contentDescription.textContent = descriptionText;

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-container');
  loadTasksArray(tasks, taskList);
  contentBody.append(taskList);

  function loadTasksArray(taskArray, parentUl) {
    for (let i = 0; i < taskArray.length; i++) {
      const {
        taskElement,
        checkBox,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        editTaskBtn,
        deleteTaskBtn,
      } = createTaskElements(
        taskArray[i],
        projectController.projectArray[associatedProject[i]]
      );

      // Create project button
      const projectBtn = document.createElement('button');
      projectBtn.textContent =
        projectController.projectArray[associatedProject[i]].getProjectTitle();
      projectBtn.addEventListener('click', () => {
        loadMainContentProjects(
          projectController.projectArray[associatedProject[i]].getProjectTitle()
        );
        setReloadContentBody('project');
      });

      taskElement.append(
        checkBox,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        projectBtn,
        editTaskBtn,
        deleteTaskBtn
      );

      parentUl.appendChild(taskElement);
    }
  }
}

function createTaskElements(task, project) {
  const taskElement = document.createElement('li');
  const checkBox = createCheckBox(project, task);
  const taskName = document.createElement('h3');
  taskName.textContent = task.getTitle();
  taskName.classList.add('task-name');
  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = task.getDescription();
  const taskDueDate = document.createElement('p');
  if (isValid(task.getDueDate())) {
    taskDueDate.textContent = format(task.getDueDate(), 'PPP');
  } else {
    taskDueDate.textContent = '';
  }
  const taskPriority = document.createElement('p');
  taskPriority.textContent = task.getPriority();
  const editTaskBtn = document.createElement('button');
  editTaskBtn.textContent = 'Edit';
  const deleteTaskBtn = document.createElement('button');
  deleteTaskBtn.classList.add('delete');
  deleteTaskBtn.textContent = 'Delete';

  // Event Listeners
  checkBox.addEventListener('change', (event) => {
    task.toggleComplete();
  });

  editTaskBtn.addEventListener('click', (event) => {
    loadTaskPopup(task);
  });

  return {
    taskElement,
    checkBox,
    taskName,
    taskDescription,
    taskDueDate,
    taskPriority,
    editTaskBtn,
    deleteTaskBtn,
  };

  function createCheckBox(inputProject, inputTask) {
    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.checked = inputTask.isComplete(); // checkbox will be set as checked if task is complete
    return newCheckBox;
  }
}

function loadProjectPopup(project) {
  newProjectBtn.setAttribute('disabled', true);
  disableAllButtons();

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

  if (project !== undefined) {
    nameInput.value = project.getProjectTitle();
    descriptionInput.value = project.getProjectDescription();
  }

  // Submit project data
  projectForm.onsubmit = (event) => {
    event.preventDefault();
    const newProject = projectModule.project(
      nameInput.value,
      descriptionInput.value
    );

    // if (project === undefined) {
    //   console.warn('No project given');
    //   projectController.addProject(newProject);
    // } else {
    //   projectController.projectArray[
    //     projectController.projectIndex(currentProject)
    //   ] = newProject;
    // }
    if (project === undefined) {
      // New Project
      projectController.addProject(newProject);
    } else {
      // Edit current project
      // 1) set project name
      projectController.projectArray[
        projectController.projectIndex(project.getProjectTitle())
      ].setProjectTitle(nameInput.value);
      // 2) set project description
      projectController.projectArray[
        projectController.projectIndex(project.getProjectTitle())
      ].setProjectDescription(descriptionInput.value);
    }

    loadSideBar();
    reloadContentBody();
    // loadMainContentProjects(newProject.getProjectTitle());
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
  disableAllButtons();

  const taskPopup = document.createElement('div');
  const taskForm = document.createElement('form');
  taskForm.setAttribute('id', 'task-form');

  // Task name input
  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'task', 'task-name', 'Task Name', true);
  const nameLabel = createLabel('Task Name', nameInput);

  // Task description input
  const descriptionInput = document.createElement('textarea');
  setInputValues(
    descriptionInput,
    'text',
    'descriptionInput',
    'descriptionInput',
    'Task Description',
    false
  );
  const descriptionLabel = createLabel('Task Description', descriptionInput);

  // Date Input
  const dateInput = document.createElement('input');
  setInputValues(dateInput, 'date', 'due-date', 'due-date', '', false);
  const dateLabel = createLabel('Due Date', 'due-date');

  // Priority Input
  const priorityInput = document.createElement('div');
  const priorityLabel = createLabel('Priority', 'priority');
  priorityInput.classList.add('radio-toolbar');
  const lowPriorityInput = document.createElement('input');
  setInputValues(lowPriorityInput, 'radio', 'priority', 'low');
  const lowPriorityLabel = createLabel('Low', 'low');
  const mediumPriorityInput = document.createElement('input');
  setInputValues(mediumPriorityInput, 'radio', 'priority', 'medium');
  const mediumPriorityLabel = createLabel('Medium', 'medium');
  const highPriorityInput = document.createElement('input');
  setInputValues(highPriorityInput, 'radio', 'priority', 'high');
  const highPriorityLabel = createLabel('High', 'high');

  // Default checked value
  mediumPriorityInput.checked = true;

  priorityInput.append(
    lowPriorityInput,
    lowPriorityLabel,
    mediumPriorityInput,
    mediumPriorityLabel,
    highPriorityInput,
    highPriorityLabel
  );

  // if an input task was given (edit button clicked) fill in previous data
  if (task !== undefined) {
    nameInput.value = task.getTitle();
    descriptionInput.value = task.getDescription();
    if (isValid(task.getDueDate())) {
      dateInput.value = format(task.getDueDate(), 'yyyy-MM-dd');
    }

    if (task.getPriority() === 'low') {
      lowPriorityInput.checked = true;
    } else if (task.getPriority() === 'medium') {
      mediumPriorityInput.checked = true;
    } else {
      highPriorityInput.checked = true;
    }
  }

  const submitTaskBtn = createSubmitBtn();

  taskForm.onsubmit = (event) => {
    event.preventDefault();
    // create to-do item
    const checkedID = document.querySelector(
      'input[name="priority"]:checked'
    ).id;
    const newToDoItem = toDoItemModule.toDoItem(
      nameInput.value,
      descriptionInput.value,
      new Date(dateInput.value),
      checkedID,
      false
    );
    if (task === undefined) {
      // add the task to the current project
      currentProject.addToDoItem(newToDoItem);
    } else {
      // update the task in the current project
      task.setTitle(nameInput.value);
      task.setDescription(descriptionInput.value);
      task.setDueDate(new Date(dateInput.value));
      task.setPriority(checkedID);
    }
    reloadContentBody();
    // loadMainContentProjects(currentProject.getProjectTitle());
    closePopup(taskPopup);
  };

  const closeTaskFormBtn = createCloseFormBtn(taskPopup);

  taskForm.append(
    nameLabel,
    nameInput,
    descriptionLabel,
    descriptionInput,
    dateLabel,
    dateInput,
    priorityLabel,
    priorityInput,
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

function disableAllButtons() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
}

function clearContent(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function setReloadContentBody(type, taskParams) {
  recentTaskParams = taskParams;
  recentType = type;
}

function reloadContentBody(hideCompleted = false) {
  if (recentType === 'project') {
    loadMainContentProjects(currentProject.getProjectTitle(), hideCompleted);
  } else {
    loadMainContentTasks(
      recentTaskParams[0],
      recentTaskParams[1],
      recentTaskParams[2],
      recentTaskParams[3]
    );
  }
}

function loadDefaultEventListeners() {
  newTaskBtn.addEventListener('click', (event) => {
    loadTaskPopup();
  });

  newProjectBtn.addEventListener('click', (event) => {
    loadProjectPopup();
  });

  editProjectBtn.addEventListener('click', (event) => {
    loadProjectPopup(currentProject);
  });

  deleteProjectBtn.addEventListener('click', (event) => {
    // delete the current project
    projectController.deleteProject(currentProject.getProjectTitle());
    loadMainContentProjects('General');
    loadSideBar();
  });

  hideCompletedInput.addEventListener('change', (event) => {
    if (hideCompletedInput.checked) {
      // Hide completed tasks
      reloadContentBody(true);
    } else {
      reloadContentBody(false);
    }
  });

  highPriorityBtn.addEventListener('click', (event) => {
    // load only high-priority tasks
    const taskParams = [
      'High Priority Tasks',
      '',
      projectController.getAllHighPriorityTasks().highPriorityTaskArray,
      projectController.getAllHighPriorityTasks().projectIndex,
    ];
    loadMainContentTasks(
      taskParams[0],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );

    setReloadContentBody('highPriority', taskParams);
  });

  todayBtn.addEventListener('click', (event) => {
    const taskParams = [
      'Tasks due Today',
      '',
      projectController.getAllTodayTasks().todayTaskArray,
      projectController.getAllTodayTasks().projectIndex,
    ];
    loadMainContentTasks(
      [taskParams[0]],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );
  });

  generalBtn.addEventListener('click', (event) => {
    loadMainContentProjects('General');
    setReloadContentBody('project');
  });

  completedBtn.addEventListener('click', (event) => {
    // load only completed tasks
    loadMainContentTasks(
      'Completed Tasks',
      "Take a look at all the tasks you've completed!",
      projectController.getAllCompletedTasks().completedTaskArray,
      projectController.getAllCompletedTasks().projectIndex
    );
  });
}

export { loadSideBar, loadMainContentProjects, loadDefaultEventListeners };
