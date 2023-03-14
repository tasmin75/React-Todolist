import React, { useState } from 'react';



function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0);




  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask('');
    setCount(count + 1);
  };





  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    setCount(count - 1);
  };






  const handleDelete = (index) => {
    const newTasks = [...tasks];
    if (!newTasks[index].completed) {
      setCount(count - 1);
    }
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>



      <p>Pending Tasks: ({count}) </p>

      <ul  style={{ listStyleType: "none" }} >
        {tasks.map((task, index) => (


            <div >
          <li className="listStyle"
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.name}

            <div>
            <button className="completebtn" onClick={() => handleComplete(index)}>Complete</button> &nbsp;
            <button className="deletebtn" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
          </div>
        ))}
      </ul>







      <form onSubmit={handleSubmit}>
        <input className="txtboxStyl" placeholder="Add a new task"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        &nbsp;
        <button className="completebtn" type="submit">Add Task</button>       
      </form>

    <br/>
    </div>
  );
}

export default TodoList;
