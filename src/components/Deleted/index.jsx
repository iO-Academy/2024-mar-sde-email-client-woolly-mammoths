
function Deleted({myStyle = "unread", data= null, name, subject, body, date, id}){

        return (
            <div className={cs}>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p>{name}</p>
                    <p>{subject}</p>
                    <p>{body}</p>
                </div>
                <div className='flex flex-col'>
                    <p>{date}</p>
                </div>
            </div>
        </div>

        
        )
}
        
        export default Deleted

