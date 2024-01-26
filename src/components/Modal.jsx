import { useState, useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../context/Context'

const Modal = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSend, setIsSend] = useState(false)
    const { toggleModal } = useContext(AppContext)

    const submitHandler = e => {
        e.preventDefault()

        if (!name || !phone || !email || !message) return false

        setIsSend(true)
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
    }

    const handleOverlayClick = e => {
        if (e.target.classList.contains('modal-overlay')) {
            toggleModal()
        }
    }

    const handleClose = () => {
        toggleModal()
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-black-90 bg-opacity-85 z-[999] flex justify-center items-center modal-overlay" onClick={handleOverlayClick}>
            <div className="relative max-w-[700px] w-full bg-white py-[50px] px-[30px] md:py-[40px] md:px-[100px] m-[15px]">
                <div className="absolute right-4 top-4 cursor-pointer transition-opacity hover:opacity-70" onClick={handleClose}>
                    <IoClose size={45} />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-[24px] md:text-[40px] mb-[20px] text-center">Напишіть нам</h2>
                    {isSend ? (
                        <h2 className="font-bold text-[24px] md:text-[30px] my-[100px] text-center">Дякуємо!</h2>
                    ) : (
                        <form onSubmit={submitHandler}>
                            <div className="mb-6">
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="border-b-2 border-black-90 w-full px-4 py-2 focus:outline-none" placeholder="Ім'я" />
                            </div>
                            <div className="mb-6">
                                <input type="phone" value={phone} onChange={e => setPhone(e.target.value)} className="border-b-2 border-black-90 w-full px-4 py-2 focus:outline-none" placeholder="Телефон" />
                            </div>
                            <div className="mb-6">
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border-b-2 border-black-90 w-full px-4 py-2 focus:outline-none" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <textarea value={message} onChange={e => setMessage(e.target.value)} className="resize-none border-b-2 border-black-90 w-full px-4 py-2 focus:outline-none" placeholder="Ваше повідомлення" />
                            </div>
                            <div>
                                <input type="submit" value="Відправити" className="border-0 bg-blue-50 text-white cursor-pointer py-[10px] px-[20px] transition-colors hover:bg-red-50" placeholder="Ім'я" />
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal