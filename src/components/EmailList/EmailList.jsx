import EmailItem from "../EmailItem/EmailItem"
import SearchBar from "../SearchBar/searchBar"

function EmmailList() {

    return (
      <div>
      <SearchBar/>
      <div className='flex flex-col-reverse bg-gray-800 w-[300px]'>
            <EmailItem myStyle="unread"/>
            <EmailItem myStyle="read"/>
            <EmailItem myStyle="read"/>
          
  
      </div>
      </div>
    )
  }
  
  export default EmmailList