export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const MARK_TASK_COMPLETE = 'MARK_TASK_COMPLETE';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index, isComplete) => ({
  type: DELETE_TASK,
  payload: { index, isComplete },
});

export const markTaskComplete = (index) => ({
  type: MARK_TASK_COMPLETE,
  payload: index,
});
