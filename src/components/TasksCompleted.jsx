import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineArrowLeft,AiTwotoneTrophy,AiOutlineCheck} from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'
import { useState } from 'react'

const TasksCompleted = () => {

  //completed
  
  const location = useLocation().state.completed;
  const complete = [...location]
  console.log('is location:', location)


  return (
    <CompletedTasks>
        <Link to='/'>
          <AiOutlineArrowLeft className='previousButton'/>
        </Link>
        <h3>Completed Tasks{complete.length}
         <AiTwotoneTrophy className='completedIcon'/>
        </h3>
        <ul>

        {complete.map(task => 

        <li key={task.id}>
          <p>{task.task}</p>
          <span>{task.time}</span>
        </li>)}
            
        </ul>
    </CompletedTasks>
  )
}

export default TasksCompleted