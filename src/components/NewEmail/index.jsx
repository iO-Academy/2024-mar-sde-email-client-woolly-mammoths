import './styles.css'

const NewEmail = ({isOpen, modalClose}) => {

    // const openClass = (isOpen) ? 'open' : ''

    return (
        <div className="modal open">
            <form action="">
                <label htmlFor="email" className='sr-only'></label>
                <input type="email" id='email' placeholder='To' />
                <label htmlFor="subject" className='sr-only'></label>
                <input type="text" id='subject' placeholder='Subject' />
                <label htmlFor="content" className='sr-only'></label>
                <input type="text" id='content' />
                <div>
                    <button>Cancel</button>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewEmail