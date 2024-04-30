
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'
import Sent from './components/Sent'
import Deleted from './components/Deleted'
import Header from './components/Header'
import NewEmail from './components/NewEmail'


function App() {

  return (
    <div>
    <BrowserRouter>
    <Header />
    <div className='flex'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Inbox />} />
      <Route path='sent' element={<Sent />} />
      <Route path='/deleted' element={<Deleted />} />
      <Route path='/new-email' element={<NewEmail />} />
    </Routes>
    </div>

    </BrowserRouter>
    </div>

  )
}

export default App
