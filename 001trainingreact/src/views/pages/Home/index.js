import React, { useEffect, useState } from 'react';
import './home.css';

function Home(){
  const [tasks, setTask] = useState([]);  
  useEffect(()=>{

  },[]);
  const registerTask = ()=> setTask([...tasks, { id:generateID(), name:document.querySelector('#nameTask').value }]);
  const generateID = ()=>  Math.random().toString(36).substring(2, 15);
  const deleteTask = (e)=> setTask([...tasks.filter(task => task.id !== e.target.getAttribute("idview"))]);

  return(

    <div>
      <header>
        <h2>Tasks Painel</h2>
      </header>
      <section>
        <div className="cInputs">
          <h2>Create a task</h2>
          <input type="text" id="nameTask" autoComplete="off"/>
          <button onClick={registerTask}>Register</button>
        </div>
      </section>
      <div className="taskBoard">

        {tasks.map((task, index) =>(

          <div key={task.id} className="task">

            <h3>{ `${index+1} - ${task.name}` }</h3>

            <div className="menuTask">
              <div className="delete" idview={ task.id } onClick={ deleteTask }></div>
              <div className="edit"></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;



