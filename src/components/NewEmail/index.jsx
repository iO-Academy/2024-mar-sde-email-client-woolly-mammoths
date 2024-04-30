import { Link } from 'react-router-dom'
import EmailList from '../EmailList/EmailList'
import './styles.css'

const NewEmail = () => {



    return (
        <>
        <EmailList />
        <div className='modal w-2/4 h-3/4 flex flex-col items-stretch bg-white border border-gray-300 p-10'>
            <form action="">
                <div>
                <label htmlFor="email" className='sr-only'></label>
                <input type="email" id='email' placeholder='To' className='w-full rounded border border-gray-300 p-1 my-2'/>
                </div>
                <div>
                <label htmlFor="subject" className='sr-only'></label>
                <input type="text" id='subject' placeholder='Subject' className='w-full rounded border border-gray-300 p-1 my-2' />
                </div>
                <div>
                <label htmlFor="content" className='sr-only'></label>
                <textarea id='content' className='w-full rounded border border-gray-300 p-1 my-2' />
                </div>
                <div className='flex justify-end mt-3'>
                    <Link to='/' className='px-2 py-1 m-1 text-white bg-gray-500 rounded'>Cancel</Link>
                    <button className='px-2 py-1 m-1 text-white bg-green-600 rounded'>Send</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default NewEmail