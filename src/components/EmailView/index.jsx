const EmailView = ({eName, eDate, eAddress, eSubject, eBody}) => {

    let name = eName;
    let date = eDate;
    let address = eAddress;
    let subject = eSubject;
    let body = eBody;

return (

    <div className="border-t-2 border-b-2 mx-5 my-5 w-full">
        <div className="flex justify-between pt-5">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="font-bold text-xs">
                {date}
            </div>
        </div>
        <p className="text-xs font-semibold">{address}</p>
        <h1 className="text-2xl font-bold">{subject}</h1>
        <div className="pt-8 pb-2">
            {body}
        </div>
    </div>
    
)
}


export default EmailView