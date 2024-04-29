
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'
import Sent from './components/Sent'
import Deleted from './components/Deleted'

function App() {

  return (
    <>
    <BrowserRouter>
    <div>Header Component</div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Inbox />} />
      <Route path='sent' element={<Sent />} />
      <Route path='/deleted' element={<Deleted />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
