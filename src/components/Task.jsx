import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'

//styles

import colors from '../colors/colors.style';
import * as C from './StylesComponents'


//hooks
import { useState } from 'react';




const Task = (props) => {

   const[ischeked, setIsChecked]= useState(false)
   
   
 //modal
   const activeModal =()=> {
     props.modal()
   }

 //onchange checkbox

 const onChange = (value) => {
  props.isCompleted(props)
  setIsChecked(value)
 }


  return (
   
       <C.Card key={props.name} done={ischeked}>c
          <input type="checkbox"
           checked={ischeked}
           onChange={(e)=>onChange(e.target.checked)}
           />

          
          <label className='name'>{props.name}</label>
          
          <span className='time'>{props.time}</span>

          {/* Buttons */}

          <C.ButtonsTask done={ischeked}>
            {/* remove */}

            <AiOutlineDelete className='remove' onClick={props.remove}/>

            {/* remove */}

            {/* edit*/}
            
            <AiFillEdit className='edit'onClick={()=>activeModal()}/>

            {/* edit*/}

          </C.ButtonsTask>
        
       </C.Card>

  )
}

export default Task