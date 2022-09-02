import { useState} from 'react';
import  List  from './components/List'
import './styles/global.css'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import TasksCompleted from './components/TasksCompleted';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<List/>}/>
          <Route path='/TasksCompleted' element={<TasksCompleted/>}/>
        </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App
