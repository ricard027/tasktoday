import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'

//styles

import colors from '../colors/colors.style';

import { ButtonsTask } from './StylesComponents';

import * as C from './StylesComponents'
import { useState } from 'react';



const Task = (props) => {
    
   const[ischeked, setIsChecked]= useState(false)
   const setModal =(e)=>{
     return  props.modal
   }
  

  return (
   
       <C.Card key={props.name} done={ischeked}>

          <input type="checkbox"
           checked={ischeked}
           onChange={(e)=>setIsChecked(e.target.checked)}
           />

          
          <label className='name'>{props.name}</label>
          
          <span className='time'>{props.time}</span>

          {/* Buttons */}

          <ButtonsTask done={ischeked}>
            <AiOutlineDelete className='remove' onClick={props.remove}/>
            <AiFillEdit className='edit' onClick={setModal(props.modal)}/>
          </ButtonsTask>
         
  
          
       </C.Card> 
  )
}

export default Task