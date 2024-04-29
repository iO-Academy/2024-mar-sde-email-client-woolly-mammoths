import EmailItem from "../EmailItem/EmailItem"

function EmmailList() {

    return (
      <div className='flex flex-col-reverse'>
          <EmailItem myStyle="read"/>
          <EmailItem myStyle="read"/>
          <EmailItem myStyle="unread"/>
  
      </div>
    )
  }
  
  export default EmmailList