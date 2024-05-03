import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, toggleMenu }) => {
  const openClass = isOpen ? "open" : "";

  return (
    <div className={`menu ${openClass}`}>
      <button onClick={toggleMenu} className="pl-2 py-5 pr-5">
        New Email
      </button>
      <Link to="/" className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">
        Inbox
      </Link>
      <Link to="/sent" className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">
        Sent
      </Link>
      <p className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Deleted</p>
    </div>
  );
};

export default Navbar;
