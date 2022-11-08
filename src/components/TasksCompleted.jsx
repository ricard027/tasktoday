import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CompletedTasks } from './StylesComponents'
import Loading from './Loading'
import axios from 'axios'
import Task from './Task'

const TasksCompleted = () => {
  const [loading, setLoading] = useState(false)

  // completed
  const [completedTask, setCompletedTask] = useState([])

  const getTasksCompleted = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks')
      setCompletedTask(data)
      setLoading(false)
      document.querySelector('.spiner').style.display = 'none'
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTasksCompleted()
  }, [])

  return (

    <CompletedTasks>
      <Link to="/">
        <AiOutlineArrowLeft className="previousButton" />
      </Link>

      <h3>Completed Tasks</h3>
      <ul>
        {
            completedTask.length === 0
              ? <div className='spiner'><Loading loading={loading}/></div>
              : completedTask.filter((tasks) => tasks.isCompleted === true).map(tasks =>
             < Task
             key={tasks._id}
             id={tasks._id}
             description={tasks.description}
             isCompleted={tasks.isCompleted}
             fetchTasks={getTasksCompleted}
             />)

         }
      </ul>
    </CompletedTasks>
  )
}

export default TasksCompleted
