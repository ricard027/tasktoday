import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
// styles

import * as C from './StylesComponents'

// hooks
import { useState } from 'react'

const Task = (props) => {
  const [ischeked, setIsChecked] = useState(false)

  // modal
  const activeModal = () => {
    props.modal()
  }

  // remove

  const HandleRemove = async (id) => {
    props.fetchTasks()
    try {
      await axios.delete(
          `https://fsc-task-manager-backend.herokuapp.com/tasks/${props.id}`
      )
      await props.fetchTasks()
    } catch (error) {
      alert('tente novamente')
    }
  }

  // onchange checkbox

  const onChange = (value) => {
    props.isCompleted(props)
    setIsChecked(value)
  }

  return (
    <C.Card key={props.name} done={ischeked}>
      c
      <input
        type="checkbox"
        checked={ischeked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="name">{props.name}</label>
      <span className="time">{props.time}</span>
      {/* Buttons */}
      <C.ButtonsTask done={ischeked}>
        {/* remove */}

        <AiOutlineDelete
          className="remove"
          onClick={() => HandleRemove()}
        />

        {/* remove */}

        {/* edit */}

        <AiFillEdit className="edit" onClick={() => activeModal()} />

        {/* edit */}
      </C.ButtonsTask>
    </C.Card>
  )
}

export default Task
