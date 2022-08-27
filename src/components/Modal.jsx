import React from 'react'

const Modal = (props) => {
  console.log(props)
  return (

    <div className='modal'>
    
     <label >new task:</label>
     <input type="text" value={props.tasks} />
    
     <button>ok</button>
  
    </div>
  )
}

export default Modal