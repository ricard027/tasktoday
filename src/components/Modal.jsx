import React from 'react'
import { useState } from 'react'
import {CustomModal} from '../components/StylesComponents'

const Modal = ({tasks,open,handleEdit,id,time}) => {


const[newValue,setNewValue]= useState(tasks)



const ReplaceValue = () =>{
  handleEdit(newValue,id,time)
   open()
}



  
  return (
    <CustomModal>
        <div className='modal' >
            <h3>Edit task</h3>
            <input type="text" defaultValue={tasks} onChange={(e)=>setNewValue(e.target.value)} />
            <button  onClick={ReplaceValue}>OK</button>
         
        </div>
    </CustomModal>
  )
}

export default Modal;
