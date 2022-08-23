import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


//styles

import colors from '../colors/colors.style';

import { ButtonsTask } from './StylesComponents';

import * as C from './StylesComponents'



const Task = (props) => {


    
  

  return (
   
       <C.Card key={props.name}>
         
          <p className='name'>{props.name}</p>
          <span className='time'>{props.time}</span>

          <ButtonsTask>
            <AiOutlineDelete className='remove' onClick={props.remove}/>
            <AiFillEdit className='edit' onClick={props.edit}/>
          </ButtonsTask>
         
  
          
       </C.Card> 
  )
}

export default Task