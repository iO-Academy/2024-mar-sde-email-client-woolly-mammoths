import { Link } from "react-router-dom"
import NewEmail from "../NewEmail"

const Navbar = () => {

    return (
        <div>
        <div className="flex flex-col fixed left-0 bg-teal-400 w-1/12 h-full justify-start items-start">
            <button to = '/new-email' className="pl-2 py-5 pr-5">New Email</button>
            <Link to = '/' className="pl-2 py-5 pr-5">Inbox</Link>
            <Link to = '/sent' className="pl-2 py-5 pr-5">Sent</Link>
            <Link to = '/deleted' className="pl-2 py-5 pr-5">Deleted</Link>
        </div>

        <NewEmail />
        </div>
    )
}

export default Navbar