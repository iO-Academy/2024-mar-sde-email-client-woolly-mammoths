
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import Header from "./components/Header";
import NewEmail from './components/NewEmail';
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <BrowserRouter>
      <Header toggleMenu={toggleMenu} />
      <div className="flex w-full">
        <Navbar isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path='/new-email' element={<NewEmail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
