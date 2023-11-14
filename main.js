import './style.css'

import { taskAdder } from './taskAdder.js'

const appDiv = document.getElementById('app');
const form = document.getElementById('new-task');
const tasks = document.getElementById('tasks');
const submit = document.getElementById('add-new');

let newTask = null;

submit.addEventListener('click', () =>{
  newTask = form.value;
  if(!newTask) return;
  taskAdder(tasks, newTask);
  form.value = null;
})


