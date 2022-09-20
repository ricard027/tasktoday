import React from 'react';
import { useState} from 'react';
import { CustomSection } from '../components/StylesComponents';
import  {useNavigate, Link} from 'react-router-dom'

//component
import image from '../img/tasksEmpty.png';
import { MessageInput } from '../components/StylesComponents';
import Task from './Task';
import Modal  from '../components/Modal';
import * as C from '../components/StylesComponents';
import TasksCompleted from './TasksCompleted';
//styles

import styled from 'styled-components'
import {GrAdd}from 'react-icons/gr'
import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


// colors

import colors from '../colors/colors.style.jsx';
import { useEffect } from 'react';
 



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
  
  const totalCompleted = [];
  let qtdCompleted = []
   
  




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
      setMessageInput('write something!')
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



  //completed


  


  const isCompleted = (completed) =>{
    
     //   !!PENDENCIAS!!

     //refazer a lista após completar as tasks, copiando as tasks completas 
     //e as enviando como props e deletar da currenty
    
    const  complete = tasks.filter(tasks => tasks.id === completed.id )
 
     for(let i of complete){
         totalCompleted.push([i])
     }

    
     qtdCompleted = [...totalCompleted]
     const qtd = document.querySelector('.qtd')
     qtd.classList.add('active')
     qtd.innerText = qtdCompleted.length;
     
      
   }


 const navigate = useNavigate()

 const handleNavigate = () => {

   
   navigate('/TasksCompleted',{
    state:{
           completed:[...totalCompleted] }
      })
 }

 // instalar a lib react-toastfy pra adicionar pop ups com menssagens

  return(
  
   
    <CustomSection qtdCompleted={qtdCompleted}>
    <h2>Task - Today</h2>
     

       <input type="search" 
              onChange={(e)=>setTask(e.target.value)}
              value={task}
              placeholder =" new task..." className='inptAdd' />

       <button onClick={handleTasks} className='add'>
          add
         <GrAdd className='spanButton'/>
       </button>
       
       <MessageInput >{messageInput}</MessageInput>
       <p className='currenty'>Currenty tasks: {tasks.length}</p>
    
        <button onClick={()=> handleNavigate()} className='completed'>Completed Tasks 
        <span className='qtd'></span>
        </button>
       
    

  
     { modal && <Modal open={handleModal} tasks={valueEdit} id={newId} handleEdit ={handleEdit} time={newTime}/>}
       
       {
       
       tasks.length === 0? 
          <img src={image} alt="image tasks empty" />:
       <C.Container>
          {
          tasks.map(tasks => <Task
                             
                             isCompleted={isCompleted}
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