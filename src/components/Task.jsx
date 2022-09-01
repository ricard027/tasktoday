import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'

//styles

import colors from '../colors/colors.style';
import * as C from './StylesComponents'


//hooks
import { useState } from 'react';




const Task = (props) => {

   const[ischeked, setIsChecked]= useState(false)
   

   const handleClick =()=> {
     props.modal()
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

          <C.ButtonsTask done={ischeked}>
            <AiOutlineDelete className='remove' onClick={props.remove}/>
            <AiFillEdit className='edit' onClick={()=>handleClick()}/>
          </C.ButtonsTask>
        
       </C.Card>

  )
}

export default Task