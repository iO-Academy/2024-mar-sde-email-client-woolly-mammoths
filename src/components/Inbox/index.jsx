import EmailList from '../EmailList'

const Inbox = () => {
    return (
        <div className="flex">
            <div className="w-full">
                <EmailList/>
            </div>
            <div className="">
                {/* <EmailString /> */}
            </div>
        </div>
    )
}

export default Inbox