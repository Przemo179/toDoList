import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskRow } from './components/taskRow';
import { AddTask } from './components/addTask';
import { UpdateTask } from './components/updateTask';


function App() {
  const[toDo, setToDo] = useState([
  ]);
  const [updateData, setUpdateData] = useState('');
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask && newTask.length <= 300) {
      setToDo([...toDo, { id: toDo.length, title: newTask, status: false }])
      setNewTask('');
    }
    // for(let i=30;i<newTask.length; i= i+30) {
    //   let endNewTask = newTask.split('');
    //   endNewTask.splice(i, 0, "\n").join('');
    //   let
    //   setToDo([...toDo, { id: toDo.length, title: , status: false }]);
    // }
  
  }

  const removeTask = (id) => {
      setToDo(toDo.slice(0, id)
                  .concat(toDo.slice(id + 1)));
  }
  
  const markTask = (id) => {
    setToDo(toDo.map( task => {
      if(task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    }))
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const changeTask = (e) => {
      setUpdateData({
        id: updateData.id, 
        title:  e.target.value,
        status: updateData.status ? true : false
      });
  }

  const updateTask = () => {
    console.log(updateData.id);
    if(updateData.title !== toDo[updateData.id].title) {
    setToDo([...[...toDo].filter( task => task.id !== updateData.id), updateData]);
    setUpdateData('');
    }
    setUpdateData('');
  } 

  return (
    <div className="wrapper App">

      <br></br>
      <h1>ToDo List</h1>
      <br></br>

      {updateData && updateData ? (
        <>
        {/* Update task form */}
        <UpdateTask 
          changeTask = {changeTask}
          updateTask = {updateTask}
          updateData = {updateData}
          cancelUpdate = {cancelUpdate}
        />
        <br />
        </>
      ) : (
        <>
        {/* Add task form */}
        <AddTask 
          newTask = {newTask}
          setNewTask = {setNewTask}
          addTask = {addTask}
        />
        <br />
      </>
      )}

      {/* Creating list */}
                    <TaskRow 
                      toDo={toDo}
                      removeTask = {removeTask}
                      markTask = {markTask}
                      setUpdateData = {setUpdateData}
                    />
    </div>
  );
}

export default App;
