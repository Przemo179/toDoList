import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskRow } from './components/taskRow';
import { AddTask } from './components/addTask';


function App() {
  const[toDo, setToDo] = useState([
  ]);
  const [updateData, setUpdateData] = useState('');
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask) {
      setToDo([...toDo, { id: toDo.length + 1, title: newTask, status: false }])
      setNewTask('');
    }
  }

  const removeTask = (id) => {
      setToDo(toDo.slice(0, id)
                  .concat(toDo.slice(id + 1)));
  }

  return (
    <div className="wrapper App">

      <br></br>
      <h1>ToDo List</h1>
      <br></br>

      <br />

      {/* Add task form */}
      <AddTask 
        newTask = {newTask}
        setNewTask = {setNewTask}
        addTask = {addTask}
      />
      <br />
      
      {/* Creating list */}
      {toDo && toDo.length ? '' : 'you do not have any task'}
      {toDo && toDo.sort((a,b) => a.id > b.id ? 1 : -1)
                   .map((task, id) => (
                    <TaskRow 
                      status={task.status}
                      id={id}
                      title={task.title}
                      removeTask={removeTask}
                    />
                   )
      )}
    </div>
  );
}

export default App;
