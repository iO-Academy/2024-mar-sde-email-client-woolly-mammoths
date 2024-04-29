import { useState } from 'react'

function EmailItem({myStyle = "unread"}) {

    cs = 'bg-white p-[10px] border-2 border-black w-[300px]'

    if (myStyle === "read"){
        cs = 'bg-gray-300 p-[10px] border-2 border-black'
    }

  return (
    <div className={cs}>
        <p>content</p>

    </div>
  )
}

export default EmailItem
