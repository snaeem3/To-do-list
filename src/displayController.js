import * as projectController from './projectController.js';

const projectList = document.querySelector('#project-list');
const contentHeader = document.querySelector('#content-header');
const contentDescription = document.querySelector('#content-description');
const contentBody = document.querySelector('#content-body');

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
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
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
  }
}

function clearContent(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

export { loadSideBar, loadMainContent };
