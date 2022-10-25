import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'

import axios from 'axios'

const TasksCompleted = () => {
  // completed

  const completedtasks = async () => {
    const { data } = await axios.get(
      'https://fsc-task-manager-backend.herokuapp.com/tasks'
    )
    return data
  }

  const { data } = completedtasks()

  return (
    <CompletedTasks>
      <Link to="/">
        <AiOutlineArrowLeft className="previousButton" />
      </Link>

      <h3>Completed Tasks</h3>
      <ul>
        {data.map((tasks) =>
          tasks.iscompleted === true
            ? (
            <li>tasks.description</li>
              )
            : (
            <li>none</li>
              )
        )}
      </ul>
    </CompletedTasks>
  )
}

export default TasksCompleted
