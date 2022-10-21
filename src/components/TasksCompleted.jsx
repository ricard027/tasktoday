import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'
import { useState } from 'react'
import axios from 'axios'

const TasksCompleted = () => {
   

  //completed

  const completedtasks = async()=>{
    const {data}  = await axios.get(`https://fsc-task-manager-backend.herokuapp.com/tasks`)
     
  }
  completedtasks()

 
  return (
    <CompletedTasks>

        <Link to='/'>
          <AiOutlineArrowLeft className='previousButton'/>
        </Link>

        <h3>Completed Tasks</h3>
        <ul>
        {completed.map(tasks=> tasks.iscompleted ===true?<li>tasks.description</li>:<li>none</li>)}
        </ul>
       
    </CompletedTasks>
  )
}

export default TasksCompleted