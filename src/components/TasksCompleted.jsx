import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft,AiTwotoneTrophy,AiOutlineCheck} from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'

const TasksCompleted = () => {
  return (
    <CompletedTasks>
      
        <Link to='/'>
          <AiOutlineArrowLeft className='previousButton'/>
        </Link>
        <h3>Completed Tasks
         <AiTwotoneTrophy className='completedIcon'/>
        </h3>
        <ul>
            <li>
              <p>card</p>
              <AiOutlineCheck/>
            </li>
            <li>
              <p>card</p>
              <AiOutlineCheck/>
            </li>
            <li>
              <p>card</p>
              <AiOutlineCheck/>
            </li>
            
          
        </ul>
    </CompletedTasks>
  )
}

export default TasksCompleted