const EmailView = ({eName, eDate, eAddress, eSubject, eBody}) => {

return (
    <div className="border-t-2 border-b-2 mx-5 my-5 w-4/6 h-fit">
        <div className="flex justify-between pt-3">
            <h2 className="text-xl font-semibold">{eName}</h2>
            <div className="font-bold text-xs">
                {(new Date(eDate).toLocaleDateString())}
            </div>
        </div>
        <p className="text-xs font-semibold my-2">{eAddress}</p>
        <h1 className="text-2xl font-bold">{eSubject}</h1>
        <div className="pt-8 pb-2">
            {eBody}
        </div>
    </div>
)
}


export default EmailView