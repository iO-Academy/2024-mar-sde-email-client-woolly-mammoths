const EmailView = ({eName, eDate, eAddress, eSubject, eBody}) => {

    let name = eName;
    let date = eDate;
    let address = eAddress;
    let subject = eSubject;
    let body = eBody;

return (
    <div className="border-t-2 border-b-2 mx-5 my-5 w-4/6 h-fit">
        <div className="flex justify-between pt-3">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="font-bold text-xs">
                {(new Date(date).toLocaleDateString())}
            </div>
        </div>
        <p className="text-xs font-semibold my-2">{address}</p>
        <h1 className="text-2xl font-bold">{subject}</h1>
        <div className="pt-8 pb-2">
            {body}
        </div>
    </div>
)
}


export default EmailView