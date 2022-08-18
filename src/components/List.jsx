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




  function handleUsers(){
    
    const newUsers = {
      user: user,
      time: new Date().toLocaleString('pt-br', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
       
      })

    }

     setUsers(prevUsers =>[...prevUsers, newUsers])
     setUser('')

    
 
    
   
  }
 


  return(
    <CustomSection>
        <h2> Task - Today </h2>
       <input type="search" onChange={(e)=>setUser(e.target.value)} value={user} />
       <button onClick={handleUsers}>
        add
        <GrAdd/></button>
       <C.Container>
         {users.map(usuarios => <User name={usuarios.user} time={usuarios.time} />)}
       </C.Container>
    </CustomSection>


  )}  

  
  
  
  export default List