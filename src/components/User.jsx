

import colors from '../colors/colors.style';

import * as C from '../components/StylesComponents'



const User = (props) => {
  return (
   
       <C.Card>
          <strong>{props.name}</strong>
          <p>{props.time}</p>
       </C.Card> 
  )
}

export default User