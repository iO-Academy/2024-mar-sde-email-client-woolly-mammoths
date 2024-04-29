
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'

function App() {

  return (
    <>
    <BrowserRouter>
    <div>Header Component</div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Inbox />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
