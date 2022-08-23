import React from 'react'
import { useState } from 'react'
import { CustomSection } from '../components/StylesComponents'
//component
import { MessageInput } from '../components/StylesComponents'
import User from './Task'
import * as C from '../components/StylesComponents'

//styles

import styled from 'styled-components'
import {GrAdd}from 'react-icons/gr'
import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


// colors

import colors from '../colors/colors.style.jsx';
 



function List() {

  const[task, setTask]= useState('')
  const[tasks, setTasks] = useState([])
  const[messageInput, setMessageInput] = useState('')
  const[edit,setEdit] = useState('')
  const[id, setId] = useState(0)
  


  function handleTasks(){
    
    setId(id+1)
  

    const newTask = {
      task: task,
      id:id,
      time: new Date().toLocaleString('pt-br', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    
      })

    }
    
     if(task.length === 0){
      setMessageInput('escreva algo!')
      return
     }

     //remove 
     setTasks(prevTasks =>[...prevTasks, newTask])
     setMessageInput('')
     setTask('')
    
  }
 
  const HandleRemove = (id) =>{
    setTasks(tasks.filter(tasks => tasks.id != id))
   }

  //edit

  const handleEdit = () =>{
  

  }



  return(
    <CustomSection>
        <h2>Task - Today</h2>
       <input type="search" onChange={(e)=>setTask(e.target.value)} value={task} placeholder =" new task..." />
       <button onClick={handleTasks}>
          add
         <GrAdd/>
       </button>
       <MessageInput >{messageInput}</MessageInput>
       <C.Container>
          {tasks.map(tasks => <User name={tasks.task} key={tasks.id} time={tasks.time} id={tasks.id}remove={(e) => HandleRemove(tasks.id)} edit={handleEdit}/>)}
       </C.Container>
    </CustomSection>
   

  )}  

  
  
  
  export default List