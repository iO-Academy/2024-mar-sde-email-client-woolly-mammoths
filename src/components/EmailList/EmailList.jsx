import EmailItem from "../EmailItem/EmailItem"

function EmmailList() {

    return (
      <div className='flex flex-col-reverse bg-gray-800 w-[300px]'>
            <EmailItem myStyle="unread"/>
            <EmailItem myStyle="read"/>
            <EmailItem myStyle="read"/>
          
  
      </div>
    )
  }
  
  export default EmmailList