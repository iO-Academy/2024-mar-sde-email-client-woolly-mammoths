
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'
import Header from './components/Header'


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <div className='flex'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inbox />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
