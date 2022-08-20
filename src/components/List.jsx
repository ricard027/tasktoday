import React from 'react'
import { useState } from 'react'
import { CustomSection } from '../components/StylesComponents'
//component

import User from './User'
import * as C from '../components/StylesComponents'

//styles

import styled from 'styled-components'
import {GrAdd}from 'react-icons/gr'

// colors

import colors from '../colors/colors.style.jsx';
 



function List() {

  const[user, setUser]= useState('')
  const[users, setUsers] = useState([])
  const[messageInput, setMessageInput] = useState('')



  function handleUsers(){
    
    const newUsers = {
      user: user,
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
     setUsers(prevUsers =>[...prevUsers, newUsers])
     setMessageInput('')
     setUser('')

    
 
    
   
  }
 


  return(
    <CustomSection>
        <h2> List </h2>
       <input type="search" onChange={(e)=>setUser(e.target.value)} value={user} placeholder =" new user..." />
       <button onClick={handleUsers}>
          add
         <GrAdd/>
       </button>
       <div className='messageInput'>{messageInput}</div>
       <C.Container>
          {users.map(usuarios => <User name={usuarios.user} time={usuarios.time} />)}
       </C.Container>
    </CustomSection>


  )}  

  
  
  
  export default List