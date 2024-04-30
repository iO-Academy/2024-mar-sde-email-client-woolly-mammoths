import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="flex flex-col left-0 bg-cyan-500 text-white w-1/12 h-screen justify-start items-start">
            <button to = '/new-email' className="pl-2 py-5 pr-5 hover:bg-blue-500 w-full">New Email</button>
            <Link to = '/' className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Inbox</Link>
            <Link to = '/sent' className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Sent</Link>
            <Link to = '/deleted' className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Deleted</Link>
        </div>
    )
}

export default Navbar