

function Header() {
   
      return (
         <>
            <header className="bg-gray-500 py-2.5 px-2.5 text-white flex space-x justify-between items-center">
               <h1 className="text-2xl">Email Client</h1>
               <div className="username flex items-center">
               <span><i className="fa-solid fa-user text-black border-black border p-1 rounded-full  "></i></span>
               <h4 className="text-sm ml-1.5">User Name</h4>
               </div>
            </header>
         </>

      )
   
}

export default Header;