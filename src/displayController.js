/* eslint-disable default-case */
import { format, isWithinInterval, addDays, isValid } from 'date-fns';
import * as projectController from './projectController.js';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';
import getPrioritySortedTasks from './taskSort.js';

const body = document.querySelector('body');
const projectList = document.querySelector('#project-list');
const projectInfo = document.querySelector('#project-info');
const contentHeader = document.querySelector('#content-header');
const contentDescription = document.querySelector('#content-description');
const editProjectBtn = document.querySelector('#edit-project-btn');
const deleteProjectBtn = document.querySelector('#delete-project-btn');
const hideCompletedInput = document.querySelector('#hide-completed');
const prioritySortInput = document.querySelector('#priority-sort');
const dateRangeContainer = document.querySelector('#date-range-container');
const dateRangeInput = document.querySelector('#date-range');
const dateRangeOutput = document.querySelector('#date-range-output');
const dateRangeLabel = document.querySelector('#date-range-label');
const contentBody = document.querySelector('#content-body');
const generalBtn = document.querySelector('#generalBtn');
const highPriorityBtn = document.querySelector('#highPriorityBtn');
const todayBtn = document.querySelector('#todayBtn');
const upcomingBtn = document.querySelector('#upcomingBtn');
const completedBtn = document.querySelector('#completedBtn');
const completedCounter = document.querySelector('#completed-counter');
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
  updateCompletedCounter();
  loadSideBarProjects(projectController.getProjectNames());

  function loadSideBarProjects(projectNames) {
    projectNames.forEach((projectName) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('project-name-btn');
      let dataToolTipText = projectController
        .getProject(projectName)
        .getProjectDescription();
      if (dataToolTipText.length < 1) {
        dataToolTipText = 'No Project Description';
      }
      projectBtn.setAttribute('data-tool-tip', dataToolTipText);
      projectBtn.textContent = projectName;
      projectBtn.style['background-color'] = projectController
        .getProject(projectName)
        .getColor();
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

function updateCompletedCounter() {
  completedCounter.textContent =
    projectController.getAllCompletedTasks().completedTaskArray.length;
}

function loadMainContentProjects(
  projectName = 'General',
  hideCompleted = false
) {
  clearContent(contentBody);
  newTaskBtn.style.display = 'flex';
  editProjectBtn.style.display = 'block';
  deleteProjectBtn.style.display = 'block';
  setCurrentProject(projectName);
  hideCompleted = hideCompletedInput.checked;

  // Hide edit and delete project buttons if 'General'
  if (projectName === 'General') {
    deleteProjectBtn.style.display = 'none';
    editProjectBtn.style.display = 'none';
  }

  // Hide upcoming days slider
  hideDateRangeElements();

  // Populate header and description
  contentHeader.textContent = projectName;
  contentDescription.textContent = currentProject.getProjectDescription();

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-container');
  taskList.classList.add('main-content-projects');
  loadTasks(currentProject, taskList);
  contentBody.append(taskList);

  function loadTasks(project, parentUl) {
    let taskArray = hideCompleted
      ? project.getIncompletedTasks()
      : project.getToDoItems();

    // sort tasks by priority if checked
    if (prioritySortInput.checked) {
      taskArray = getPrioritySortedTasks(taskArray);
    }

    let taskIndex = 0;
    taskArray.forEach((task) => {
      const {
        taskElement,
        taskCheckBox,
        descriptionCheckBox,
        descriptionCheckBoxLabel,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        buttonContainer,
        // editTaskBtn,
        // deleteTaskBtn,
      } = createTaskElements(task, project, taskIndex);

      // Set class with task priority
      taskElement.classList.add(task.getPriority());
      taskElement.style['animation-delay'] = `${taskIndex * 0.1}s`;

      taskElement.append(
        taskCheckBox,
        descriptionCheckBox,
        descriptionCheckBoxLabel,
        // taskName,
        taskDescription,
        taskDueDate,
        // taskPriority,
        buttonContainer
        // editTaskBtn,
        // deleteTaskBtn
      );

      parentUl.appendChild(taskElement);
      taskIndex += 1;
    });
  }
}

function loadMainContentTasks(
  headerText,
  descriptionText,
  tasks,
  associatedProject, // array of project indices associated with tasks
  hideCompleted = false
) {
  clearContent(contentBody);
  newTaskBtn.style.display = 'none';
  editProjectBtn.style.display = 'none';
  deleteProjectBtn.style.display = 'none';
  hideCompleted = hideCompletedInput.checked;

  // Populate header and description
  contentHeader.textContent = headerText;
  contentDescription.textContent = descriptionText;

  // Hide upcoming days slider
  hideDateRangeElements();
  if (recentType === 'upcoming') {
    // Show upcoming days slider
    // dateRangeInput.style.display = 'block';
    // dateRangeOutput.style.display = 'block';
    // dateRangeLabel.style.display = 'block';
    dateRangeContainer.style.display = 'flex';
  }

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-container');
  taskList.classList.add('main-content-tasks');

  // Sort tasks if checked
  if (prioritySortInput.checked) {
    tasks = getPrioritySortedTasks(tasks);
  }

  // Load incomplete tasks or All tasks
  if (hideCompleted) {
    const incompleteTasks = tasks.filter((task) => !task.isComplete());
    loadTasksArray(incompleteTasks, taskList);
  } else {
    loadTasksArray(tasks, taskList);
  }

  contentBody.append(taskList);

  function loadTasksArray(taskArray, parentUl) {
    for (let i = 0; i < taskArray.length; i++) {
      const {
        taskElement,
        taskCheckBox,
        descriptionCheckBox,
        descriptionCheckBoxLabel,
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        buttonContainer,
        // editTaskBtn,
        // deleteTaskBtn,
      } = createTaskElements(
        taskArray[i],
        projectController.projectArray[associatedProject[i]],
        i
      );

      // Create associated project button
      const projectBtn = document.createElement('button');
      projectBtn.textContent =
        projectController.projectArray[associatedProject[i]].getProjectTitle();
      projectBtn.style['background-color'] =
        projectController.projectArray[associatedProject[i]].getColor();
      projectBtn.classList.add('project-btn');
      buttonContainer.prepend(projectBtn);

      projectBtn.addEventListener('click', () => {
        loadMainContentProjects(
          projectController.projectArray[associatedProject[i]].getProjectTitle()
        );
        setReloadContentBody('project');
      });

      // Set class with task priority
      taskElement.classList.add(taskArray[i].getPriority());
      taskElement.style['animation-delay'] = `${i * 0.1}s`;

      taskElement.append(
        taskCheckBox,
        descriptionCheckBox,
        descriptionCheckBoxLabel,
        // taskName,
        taskDescription,
        taskDueDate,
        // taskPriority,
        buttonContainer
        // projectBtn,
        // editTaskBtn,
        // deleteTaskBtn
      );

      parentUl.appendChild(taskElement);
    }
  }
}

function createTaskElements(task, project, taskID) {
  const taskElement = document.createElement('li');
  const taskCheckBox = createCheckBox(project, task);
  const descriptionCheckBox = document.createElement('input');
  descriptionCheckBox.setAttribute('type', 'checkbox');
  descriptionCheckBox.setAttribute('name', 'description');
  descriptionCheckBox.setAttribute('id', `description-${taskID}`);
  descriptionCheckBox.classList.add('description-checkbox');
  const descriptionCheckBoxLabel = document.createElement('label');
  descriptionCheckBoxLabel.setAttribute('for', `description-${taskID}`);
  descriptionCheckBoxLabel.classList.add('description-checkbox-label');
  descriptionCheckBoxLabel.textContent = task.getTitle();
  const taskName = document.createElement('h3');
  taskName.textContent = task.getTitle();
  taskName.classList.add('task-name');
  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = task.getDescription();
  const taskDueDate = document.createElement('p');
  if (isValid(task.getDueDate())) {
    taskDueDate.textContent = format(task.getDueDate(), 'PP');
    // taskDueDate.textContent = `${task.getRemainingDays()} day(s) remaining`;
    if (task.isOverDue()) {
      taskDueDate.classList.add('overdue');
    }
    const dataToolTipText = `Due in ${task.getRemainingDays()} day(s)`;
    taskDueDate.setAttribute('data-tool-tip', dataToolTipText);
  } else {
    taskDueDate.textContent = '';
  }
  taskDueDate.classList.add('task-due-date');
  const taskPriority = document.createElement('p');
  taskPriority.textContent = task.getPriority();
  taskPriority.classList.add('task-priority');

  // Button Container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  // Edit Task Button
  const editTaskBtn = document.createElement('button');
  // editTaskBtn.textContent = 'Edit';
  editTaskBtn.classList.add('edit-task-btn');
  editTaskBtn.classList.add('edit');

  // Delete Task button
  const deleteTaskBtn = document.createElement('button');
  deleteTaskBtn.classList.add('delete');
  deleteTaskBtn.classList.add('delete-task-btn');
  // deleteTaskBtn.textContent = 'Delete';

  buttonContainer.append(editTaskBtn, deleteTaskBtn);

  // Event Listeners
  taskCheckBox.addEventListener('change', (event) => {
    task.toggleComplete();
    updateCompletedCounter();
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

    // loadMainContentProjects(project.getProjectTitle());
    reloadContentBody();
  });

  return {
    taskElement,
    taskCheckBox,
    descriptionCheckBox,
    descriptionCheckBoxLabel,
    taskName,
    taskDescription,
    taskDueDate,
    taskPriority,
    buttonContainer,
    // editTaskBtn,
    // deleteTaskBtn,
  };

  function createCheckBox(inputProject, inputTask) {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('task-complete-checkbox');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.checked = inputTask.isComplete(); // checkbox will be set as checked if task is complete
    return newCheckBox;
  }
}

function hideDateRangeElements() {
  // dateRangeInput.style.display = 'none';
  // dateRangeOutput.style.display = 'none';
  // dateRangeLabel.style.display = 'none';
  dateRangeContainer.style.display = 'none';
}

function loadProjectPopup(project) {
  newProjectBtn.setAttribute('disabled', true);
  disableAllButtons();
  disableAllInputs();

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('pop-up');
  const projectForm = document.createElement('form');
  projectForm.setAttribute('id', 'project-form');

  const projectFormTitle = document.createElement('h2');
  projectFormTitle.textContent = 'Enter Project Details';
  projectFormTitle.setAttribute('id', 'project-form-title');

  const nameInput = document.createElement('input');
  setInputValues(
    nameInput,
    'text',
    'project-name',
    'project-name',
    'Project Name',
    true
  );
  const nameLabel = createLabel('Project Name*', nameInput);

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

  // Color input
  // const projectColorInput = document.createElement('input');
  // projectColorInput.setAttribute('type', 'color');
  // projectColorInput.setAttribute('name', 'project-color');
  // projectColorInput.setAttribute('id', 'project-color');
  // const colorLabel = createLabel('Project Color', projectColorInput);

  const colorData = [
    ['Red', '#ff0000'],
    ['Green', '#008000'],
  ];

  const projectColorInput = document.createElement('div');
  const colorLabel = createLabel('Project Color', 'project-color');
  projectColorInput.classList.add('radio-toolbar');

  // Color 1
  const colorInput1 = document.createElement('input');
  setInputValues(colorInput1, 'radio', 'project-color', 'color1');
  const colorLabel1 = createLabel('', 'color1');
  colorInput1.setAttribute('color', colorData[0][1]);
  document.body.style.setProperty('--project-color-1', colorData[0][1]);

  // Color 2
  const colorInput2 = document.createElement('input');
  setInputValues(colorInput2, 'radio', 'project-color', 'color2');
  const colorLabel2 = createLabel('', 'color2');
  colorInput2.setAttribute('color', colorData[1][1]);
  document.body.style.setProperty('--project-color-2', colorData[1][1]);

  // Custom Color
  const colorInputCustom = document.createElement('input');
  setInputValues(colorInputCustom, 'radio', 'project-color', 'colorCustom');
  const colorLabelCustom = createLabel('Custom', 'colorCustom');
  colorLabelCustom.setAttribute('color', '#FFFFFF'); // set default color to white

  // Color Input box
  const customColorInput = document.createElement('input');
  customColorInput.setAttribute('type', 'color');
  projectColorInput.setAttribute('name', 'custom-color');
  projectColorInput.setAttribute('id', 'custom-color');

  // Color Input Event Listener
  customColorInput.addEventListener('input', (event) => {
    document.body.style.setProperty(
      '--project-color-custom',
      event.target.value
    );
    colorInputCustom.setAttribute('color', event.target.value);
  });
  customColorInput.addEventListener('change', (event) => {
    colorLabelCustom.style.backgroundColor = event.target.value;
  });

  // Default checked value
  colorInput1.checked = true;

  projectColorInput.append(
    colorInput1,
    colorLabel1,
    colorInput2,
    colorLabel2,
    colorInputCustom,
    colorLabelCustom,
    customColorInput
  );

  const submitProjectBtn = createSubmitBtn();

  if (project !== undefined) {
    // Load saved data
    nameInput.value = project.getProjectTitle();
    descriptionInput.value = project.getProjectDescription();
    // projectColorInput.value = project.getColor();

    const savedColor = project.getColor();
    if (savedColor === colorData[0][1]) {
      colorInput1.checked = true;
    } else if (savedColor === colorData[1][1]) {
      colorInput2.checked = true;
    } else {
      colorInputCustom.checked = true;
      colorLabelCustom.setAttribute('color', savedColor);
      colorLabelCustom.style.backgroundColor = savedColor;
      customColorInput.value = savedColor;
    }
  }

  // Submit project data
  projectForm.onsubmit = (event) => {
    event.preventDefault();
    const checkedID = document.querySelector(
      'input[name="project-color"]:checked'
    ).id;
    let selectedColor = document
      .querySelector('input[name="project-color"]:checked')
      .getAttribute('color');

    if (selectedColor === null) {
      selectedColor = document.querySelector('input[type="color"]').value;
    }

    const newProject = projectModule.project(
      nameInput.value,
      descriptionInput.value,
      // projectColorInput.value
      selectedColor
    );

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
      // 3) set project color
      projectController.projectArray[
        projectController.projectIndex(project.getProjectTitle())
      ].setColor(selectedColor);
    }

    loadSideBar();
    reloadContentBody();
    // loadMainContentProjects(newProject.getProjectTitle());
    closePopup(projectPopup);
  };
  const closeProjectFormBtn = createCloseFormBtn(projectPopup);

  projectForm.append(
    projectFormTitle,
    nameLabel,
    nameInput,
    descriptionLabel,
    descriptionInput,
    colorLabel,
    projectColorInput,
    submitProjectBtn,
    closeProjectFormBtn
  );
  projectPopup.append(projectForm);
  body.prepend(projectPopup);
}

function loadTaskPopup(task) {
  newTaskBtn.setAttribute('disabled', true);
  disableAllButtons();
  disableAllInputs();

  const taskPopup = document.createElement('div');
  taskPopup.classList.add('pop-up');
  const taskForm = document.createElement('form');
  taskForm.setAttribute('id', 'task-form');

  // Task form header
  const taskFormTitle = document.createElement('h2');
  taskFormTitle.textContent = 'Enter Task Details';
  taskFormTitle.setAttribute('id', 'task-form-title');

  // Task name input
  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'task', 'task-name', 'Task Name', true);
  const nameLabel = createLabel('Task Name*', nameInput);

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
    const checkedID = document.querySelector(
      'input[name="priority"]:checked'
    ).id;
    // create to-do item
    const newToDoItem = toDoItemModule.toDoItem(
      nameInput.value,
      descriptionInput.value,
      new Date(dateInput.value),
      checkedID,
      false
    );
    // update date off by one day
    newToDoItem.setDueDate(new Date(dateInput.value));
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
    taskFormTitle,
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

  body.prepend(taskPopup);
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
  enableAllInputs();
}

function enableAllButtons() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = false;
  });
}

function enableAllInputs() {
  document.querySelectorAll('input').forEach((input) => {
    input.disabled = false;
  });
}

function disableAllButtons() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
}

function disableAllInputs() {
  document.querySelectorAll('input').forEach((input) => {
    input.disabled = true;
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
    updateTaskParams();
    loadMainContentTasks(
      recentTaskParams[0],
      recentTaskParams[1],
      recentTaskParams[2],
      recentTaskParams[3],
      hideCompleted
    );
  }
  function updateTaskParams() {
    // function needed for when tasks are deleted
    switch (recentType) {
      case 'completed':
        recentTaskParams[1] = `You've completed ${
          projectController.getAllCompletedTasks().completedTaskArray.length
        } task(s)!`;
        recentTaskParams[2] =
          projectController.getAllCompletedTasks().completedTaskArray;
        recentTaskParams[3] =
          projectController.getAllCompletedTasks().projectIndex;
        break;
      case 'today':
        recentTaskParams[2] =
          projectController.getAllTodayTasks().todayTaskArray;
        recentTaskParams[3] = projectController.getAllTodayTasks().projectIndex;
        break;
      case 'highPriority':
        recentTaskParams[2] =
          projectController.getAllHighPriorityTasks().highPriorityTaskArray;
        recentTaskParams[3] =
          projectController.getAllHighPriorityTasks().projectIndex;
        break;
      case 'upcoming':
        const selectedDate = addDays(new Date(), dateRangeInput.value);
        recentTaskParams[2] =
          projectController.getAllBeforeTasks(selectedDate).beforeTaskArray;
        recentTaskParams[3] =
          projectController.getAllBeforeTasks(selectedDate).projectIndex;
        break;
    }
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

  prioritySortInput.addEventListener('change', (event) => {
    reloadContentBody();
  });

  dateRangeInput.addEventListener('input', (event) => {
    reloadContentBody();
  });

  highPriorityBtn.addEventListener('click', (event) => {
    // load only high-priority tasks
    const taskParams = [
      'High Priority Tasks',
      '',
      projectController.getAllHighPriorityTasks().highPriorityTaskArray,
      projectController.getAllHighPriorityTasks().projectIndex,
    ];
    setReloadContentBody('highPriority', taskParams);
    loadMainContentTasks(
      taskParams[0],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );
  });

  todayBtn.addEventListener('click', (event) => {
    const taskParams = [
      'Tasks due Today',
      '',
      projectController.getAllTodayTasks().todayTaskArray,
      projectController.getAllTodayTasks().projectIndex,
    ];
    setReloadContentBody('today', taskParams);
    loadMainContentTasks(
      taskParams[0],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );
  });

  upcomingBtn.addEventListener('click', (event) => {
    const selectedDate = addDays(new Date(), dateRangeInput.value);
    const taskParams = [
      'Upcoming Tasks',
      '',
      projectController.getAllBeforeTasks(selectedDate).beforeTaskArray,
      projectController.getAllBeforeTasks(selectedDate).projectIndex,
    ];
    setReloadContentBody('upcoming', taskParams);
    loadMainContentTasks(
      taskParams[0],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );
  });

  generalBtn.addEventListener('click', (event) => {
    setReloadContentBody('project');
    loadMainContentProjects('General');
  });

  completedBtn.addEventListener('click', (event) => {
    // load only completed tasks
    const taskParams = [
      'Completed Tasks',
      `You've completed ${
        projectController.getAllCompletedTasks().completedTaskArray.length
      } task(s)!`,
      projectController.getAllCompletedTasks().completedTaskArray,
      projectController.getAllCompletedTasks().projectIndex,
    ];

    setReloadContentBody('completed', taskParams);
    loadMainContentTasks(
      taskParams[0],
      taskParams[1],
      taskParams[2],
      taskParams[3]
    );
  });
}

export { loadSideBar, loadMainContentProjects, loadDefaultEventListeners };
