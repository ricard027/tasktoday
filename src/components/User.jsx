import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'


//styles

import colors from '../colors/colors.style';

import { ButtonsTask } from '../components/StylesComponents';

import * as C from '../components/StylesComponents'



const User = (props) => {

  const RemoveChild = (e) =>{
    const parent =  e.target.parentElement;
    
  }

  return (
   
       <C.Card key={props.name}>
         
          <strong className='name'>{props.name}</strong>
          <p className='time'>{props.time}</p>

          <ButtonsTask>
            <AiOutlineDelete className='btnTask' onClick={RemoveChild}/>
            <AiFillEdit className='btnTask'/>
          </ButtonsTask>
         
  
          
       </C.Card> 
  )
}

export default User