import Task from '../models/Task';
import taskListMock from '../mocks/TaskList';
import { promisify } from '~/utils/promise';

export const getTasks = () => {
  const tasks = [];
  const tasksPromise = promisify(taskListMock, 200);

  return tasksPromise.then(results => {
    results.forEach(task => {
      const newTask = new Task();
      newTask.id = task.id;
      newTask.name = task.name;
      newTask.duration = task.duration;
      newTask.intervals = task.intervals;
      newTask.rests = task.rests;
      newTask.numberIntervals = task.nroIntervals;

      tasks.push(newTask);
    })

    return tasks;
  })
}

export const getTask = (id) => 
  getTasks().then(results => results.filter((task) => task.id === id)[0]);