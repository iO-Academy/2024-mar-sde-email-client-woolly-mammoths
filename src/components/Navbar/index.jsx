import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isOpen }) => {
  const openClass = isOpen ? "open" : "";

//For fullheight adjusted for header - Works at any screen height
const hh = (visualViewport.height - 64);
const [screenHeightAdj, setScreenHeightAdj] = useState("h-["+hh+"px]");

  return (
    <div className={`menu ${openClass} ${screenHeightAdj}`}>
      <button
        to="/new-email"
        className="pl-2 py-5 pr-5 hover:bg-blue-500 w-full"
      >
        New Email
      </button>
      <Link to="/" className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">
        Inbox
      </Link>
      <p className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Sent</p>
      <p className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Deleted</p>
    </div>
  );
};

export default Navbar;
