import { addDays } from 'date-fns';
import * as toDoItemModule from './todoListItem.js';
import * as projectModule from './project.js';

const project1Item1 = toDoItemModule.toDoItem(
  'Redo flowerbed',
  'Purchase shrubs and mulch',
  addDays(new Date(), -30),
  'low',
  false
);

const project1Item2 = toDoItemModule.toDoItem(
  'Renovate Bathroom',
  'Replace the sink, shower, and floor tiles',
  new Date(),
  'medium',
  false
);

const project1Item3 = toDoItemModule.toDoItem(
  'Paint guest bedroom',
  'Purchase paint and paintbrushes',
  addDays(new Date(), 10),
  'medium',
  false
);

const project2Item1 = toDoItemModule.toDoItem(
  'Create a tic-tac-toe game',
  'Implement a multiplayer and single player mode with a random move algorithm',
  addDays(new Date(), -20),
  'medium',
  true
);

const project2Item2 = toDoItemModule.toDoItem(
  'Create To-do list application',
  'Implement and test all features then apply styling',
  addDays(new Date(), -10),
  'high',
  true
);

const project2Item3 = toDoItemModule.toDoItem(
  'Create a shopping website',
  'Develop a front-end and back-end web application with a cart for users to checkout items',
  addDays(new Date(), 50),
  'medium',
  false
);

const project3Item1 = toDoItemModule.toDoItem(
  'Draw the album cover artwork',
  '',
  new Date(),
  'low',
  false
);

const project3Item2 = toDoItemModule.toDoItem(
  'Re-record new song',
  'Include a guitar solo',
  addDays(new Date(), 65),
  'high',
  false
);

const project3Item3 = toDoItemModule.toDoItem(
  'Purchase a van from the dealership',
  'Make sure it can fit all our equipment',
  addDays(new Date(), 3),
  'medium',
  false
);

const project1 = projectModule.project(
  'Home Improvements',
  'Improvements and renovations to the house',
  '#f0d107',
  [project1Item1, project1Item2, project1Item3]
);

const project2 = projectModule.project(
  'Programming projects',
  'Ideas to keep track of coding projects',
  '#f00707',
  [project2Item1, project2Item2, project2Item3]
);

const project3 = projectModule.project(
  'Band tasks',
  'Becoming a world-famous band one step at a time!',
  '#5df542',
  [project3Item1, project3Item2, project3Item3]
);

export { project1, project2, project3 };
