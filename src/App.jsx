
import List from './components/List'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksCompleted from './components/TasksCompleted'
import Page404 from './components/Page404'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<List />} />
          <Route path="/TasksCompleted" element={<TasksCompleted />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
