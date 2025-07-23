import React from 'react';

function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return <p className="text-muted">No tasks added yet.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? 'list-group-item-success' : ''
          }`}
        >
          <span
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
