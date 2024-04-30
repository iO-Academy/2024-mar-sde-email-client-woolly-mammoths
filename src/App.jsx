
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'
import Sent from './components/Sent'
import Deleted from './components/Deleted'
import Header from './components/Header'
import DeleteButton from './components/DeleteButton'


function App() {

  return (
    <>
    <DeleteButton />
    <BrowserRouter>
    <Header />
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
