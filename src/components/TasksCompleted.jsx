import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'
import { useState } from 'react'

const TasksCompleted = () => {

  //completed
  


  return (
    <CompletedTasks>

        <Link to='/'>
          <AiOutlineArrowLeft className='previousButton'/>
        </Link>

        <h3>Completed Tasks</h3>
        <ul>
         <li>teste</li>
  
            
        </ul>
    </CompletedTasks>
  )
}

export default TasksCompleted