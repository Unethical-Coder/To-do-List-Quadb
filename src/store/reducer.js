import { ADD_TASK, DELETE_TASK, MARK_TASK_COMPLETE } from './actions';

const initialState = {
  incompleteTasks: [],
  completeTasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        incompleteTasks: [...state.incompleteTasks, action.payload],
      };
    case DELETE_TASK:
      const taskList = action.payload.isComplete ? 'completeTasks' : 'incompleteTasks';
      return {
        ...state,
        [taskList]: state[taskList].filter((_, index) => index !== action.payload.index),
      };
    case MARK_TASK_COMPLETE:
      const taskToComplete = state.incompleteTasks[action.payload];
      return {
        ...state,
        incompleteTasks: state.incompleteTasks.filter((_, index) => index !== action.payload),
        completeTasks: [...state.completeTasks, taskToComplete],
      };
    default:
      return state;
  }
};

export default taskReducer;
