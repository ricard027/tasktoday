import React from 'react'
import { useState } from 'react'
import { CustomSection } from '../components/StylesComponents'
//component
import { MessageInput } from '../components/StylesComponents'
import User from './User'
import * as C from '../components/StylesComponents'

//styles

import styled from 'styled-components'
import {GrAdd}from 'react-icons/gr'
import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


// colors

import colors from '../colors/colors.style.jsx';
 



function List() {

  const[user, setUser]= useState('')
  const[users, setUsers] = useState([])
  const[messageInput, setMessageInput] = useState('')
  const[edit,setEdit] = useState('')
  const[id, setId] = useState(0)
  


  function handleUsers(){
    
    setId(id+1)
  

    const newUsers = {
      user: user,
      id:id,
      time: new Date().toLocaleString('pt-br', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    
      })

    }
    
     if(user.length === 0){
      setMessageInput('escreva algo!')
      return
     }

     //remove 
     setUsers(prevUsers =>[...prevUsers, newUsers])
     setMessageInput('')
     setUser('')
    
  }
 
  const HandleRemove = (id) =>{
    setUsers(users.filter(users => users.id != id))
   }

  //edit

  const handleEdit = () =>{
  

  }



  return(
    <CustomSection>
        <h2>List</h2>
       <input type="search" onChange={(e)=>setUser(e.target.value)} value={user} placeholder =" new user..." />
       <button onClick={handleUsers}>
          add
         <GrAdd/>
       </button>
       <MessageInput >{messageInput}</MessageInput>
       <C.Container>
          {users.map(usuarios => <User name={usuarios.user} key={usuarios.id} time={usuarios.time} id={usuarios.id}remove={(e) => HandleRemove(usuarios.id)} edit={handleEdit}/>)}
       </C.Container>
    </CustomSection>
   

  )}  

  
  
  
  export default List