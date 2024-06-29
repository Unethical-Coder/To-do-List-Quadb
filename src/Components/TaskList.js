import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, markTaskComplete } from '../store/actions';

const TaskList = () => {
  const { incompleteTasks, completeTasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (index, isComplete) => {
    dispatch(deleteTask(index, isComplete));
  };

  const handleComplete = (index) => {
    dispatch(markTaskComplete(index));
  };

  return (
    <div className="task-list-container">
      <h2>Incomplete Tasks</h2>
      <ul className="task-list">
        {incompleteTasks.map((task, index) => (
          <li key={index}>
            {task}
            <div className="task-buttons">
              <button onClick={() => handleComplete(index)} data-tooltip="Done">✅</button>
              <button onClick={() => handleDelete(index, false)} data-tooltip="Remove">❌</button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul className="task-list">
        {completeTasks.map((task, index) => (
          <li key={index}>
            {task}
            <div className="task-buttons">
              <button onClick={() => handleDelete(index, true)} data-tooltip="Remove">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
