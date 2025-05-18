import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ResumeBuilder from './pages/ResumeBuilder'
import { FormcontextProvider }  from './context/Formcontext'
import Home from './pages/Home'
import ResumePage from './components/resumePdf'

function App() {

  return (
    <FormcontextProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/editor" element={<ResumeBuilder />}/>
        <Route path="/download" element={<ResumePage />}/>
        
      </Routes>
    </BrowserRouter>
    </FormcontextProvider>
  )
}

export default App
