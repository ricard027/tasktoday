import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


//styles

import colors from '../colors/colors.style';

import { ButtonsTask } from '../components/StylesComponents';

import * as C from '../components/StylesComponents'



const User = (props) => {


    
  

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

export default User