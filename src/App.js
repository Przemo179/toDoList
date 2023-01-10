import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskRow } from './components/taskRow';


function App() {
  const[toDo, setToDo] = useState([
    {"id": 1, "title": "Task 1", "status":false},
    {"id": 2, "title": "Task 2", "status":false},
  ]);

  return (
    <div className="wrapper App">

      <br></br>
      <h1>ToDo List</h1>
      <br></br>
      
      {toDo && toDo.length ? '' : 'you do not have any task'}
      {toDo && toDo.sort((a,b) => a.id > b.id ? 1 : -1)
                   .map((task, id) => (
                    <TaskRow 
                      status={task.status}
                      id={id}
                      title={task.title}
                    />
                   )
      )}
    </div>
  );
}

export default App;
