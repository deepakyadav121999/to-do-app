export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

let nextTaskId = 1;

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: {
    id: nextTaskId++,
    name
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id
  }
});