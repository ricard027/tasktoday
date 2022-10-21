

import { useState, useEffect } from 'react';
import { CustomSection } from '../components/StylesComponents';
import {  Link } from 'react-router-dom'
import axios from 'axios';

//component

import image from '../img/tasksEmpty.png';
import { MessageInput } from '../components/StylesComponents';
import Task from './Task';
import Modal from '../components/Modal';
import * as C from '../components/StylesComponents';
import TasksCompleted from './TasksCompleted';

//styles

import styled from 'styled-components'
import { GrAdd } from 'react-icons/gr'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'


// colors

import colors from '../colors/colors.style.jsx';




function List() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [messageInput, setMessageInput] = useState('')


  const [edit, setEdit] = useState('')
  const [modal, setModal] = useState(false)
  const [valueEdit, setValueEdit] = useState()


  const [newId, setNewId] = useState()
  const [newTime, setNewTime] = useState()

  //const totalCompleted = [];
  //let qtdCompleted = []


  const saveTasks = async()=>{

    await axios.post("https://fsc-task-manager-backend.herokuapp.com/tasks",{
    description: task,
    isCompleted:false,
    
   
    
  })
}
  const fetchTasks = async () => {

    try {

      const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
      
   

       setTasks([...data])
    
    }

    catch(error) {
      console.log(error)
    }

  }

  useEffect(() => {

    fetchTasks()

  }, [])



const handleTasks = async ()=> {
      
   

  


    const newTask = {
      description: task,
       id:task._id,
       time: new Date().toLocaleString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

      })

    }
     


    if (task.length === 0) {
      setMessageInput('write something!')
      return
    }
    
    
    setTasks(prevTasks => [...prevTasks, newTask])
    setMessageInput('')
    setTask('')
   
    try{
      await saveTasks()
    }
    catch(error){

    }

    
  }

  //remove 

  const HandleRemove = async(id) => {
    
   const deleted = await axios.delete(`https://fsc-task-manager-backend.herokuapp.com/tasks/${id}`);
   const filtered = tasks.filter(tasks => tasks!=deleted)
   setTasks(filtered)
   fetchTasks()

  }


  //modal

  const handleModal = (tasksvalue, id) => {
    setModal(!modal);
    setValueEdit(tasksvalue)
    setNewId(id)

  }

  //edit

  const handleEdit = (newValue, currentId, NewTime) => {


    const totalTasks = [...tasks]
    totalTasks.splice(currentId, 1, { task: newValue, id: currentId, time: NewTime })
    setTasks(totalTasks)



  }



  //completed





  const isCompleted =  async (completed) => {
  
    try{
      await axios.patch(`https://fsc-task-manager-backend.herokuapp.com/tasks/${completed._id}`);
      
      fetchTasks()
    }
     catch(error){

     }
  }

  

  // instalar a lib react-toastfy pra adicionar pop ups com menssagens

  return (


    <CustomSection >
      <h2>Task - Today</h2>


      <input type="search"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder=" new task..." className='inptAdd' />

      <button onClick={handleTasks} className='add'>
        add
        <GrAdd className='spanButton' />
      </button>

      <MessageInput >{messageInput}</MessageInput>
      <p className='currenty'>Currenty tasks: {tasks.length}</p>

      <Link className='completed' to='/TasksCompleted'>Completed Tasks
      <span className={tasks.length===0?'none':'qtdCompleted'}>{tasks.length}</span>
      </Link>




      {modal && <Modal open={handleModal} tasks={valueEdit} id={newId} handleEdit={handleEdit} time={newTime} />}

      {

        tasks.length === 0 ?
          <img src={image} alt="image tasks empty" /> :
          <C.Container>
            {
              tasks.map(tasks => <Task

                isCompleted={isCompleted}
                name={tasks.description}
                key={tasks._id}
                time={tasks.time}
                id={tasks.id}
                remove={() => HandleRemove(tasks._id)}
                modal={() => handleModal(tasks.task, tasks.id, setNewTime(tasks.time))}
              />
              )
            }

          

          </C.Container>
          }
      
    </CustomSection>



  )
}




export default List