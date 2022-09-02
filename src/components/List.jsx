import React from 'react';
import { useState } from 'react';
import { CustomSection } from '../components/StylesComponents';
import  {Link} from 'react-router-dom'
//component
import image from '../img/tasksEmpty.png';
import { MessageInput } from '../components/StylesComponents';
import Task from './Task';
import Modal  from '../components/Modal';
import * as C from '../components/StylesComponents';


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
  const[modal,setModal] = useState(false)
  const[valueEdit, setValueEdit]= useState()

  
  const[newId,setNewId]= useState()
  const[newTime, setNewTime]= useState()

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

 
  //modal

  const handleModal = (tasksvalue,id) =>{
     setModal(!modal);
     setValueEdit(tasksvalue)
     setNewId(id)
     
  }
   
  //edit

  const handleEdit = (newValue,currentId,NewTime) => {
    const totalTasks = [...tasks]
  
    totalTasks.splice(currentId,1,{task:newValue,id:currentId,time:NewTime})
    setTasks(totalTasks)
  
  
  }

  



  return(
  
   
    <CustomSection>
    <h2>Task - Today</h2>
     

       <input type="search" 
              onChange={(e)=>setTask(e.target.value)}
              value={task}
              placeholder =" new task..." className='inptAdd' />

       <button onClick={handleTasks}>
          add
         <GrAdd className='spanButton'/>
       </button>
       
       <MessageInput >{messageInput}</MessageInput>
       <p className='currenty'>Currenty tasks: {tasks.length}</p>
       <Link to='/TasksCompleted'>tasks completed</Link>
    

  
     { modal && <Modal open={handleModal} tasks={valueEdit} id={newId} handleEdit ={handleEdit} time={newTime}/>}
       
       {
       
       tasks.length === 0? 
          <img src={image} alt="image tasks empty" />:
       <C.Container>
          {
          tasks.map(tasks => <Task 
                             name={tasks.task}
                             key={tasks.id} 
                             time={tasks.time} 
                             id={tasks.id}
                             remove={() => HandleRemove(tasks.id)}
                             modal={()=> handleModal(tasks.task,tasks.id,setNewTime(tasks.time))}
                              />
                        )
      }

       </C.Container>}
   
  </CustomSection>
  


  )}  

  
  
  
  export default List