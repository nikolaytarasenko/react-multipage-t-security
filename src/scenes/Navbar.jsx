import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = ({ isPageScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const dropdownHandler = () => {
        if (window.matchMedia('(max-width: 1199px)').matches) {
            setIsDropdownOpen(prev => !prev)
        }
    }

    return (
        <header className={`fixed top-0 w-full transition-shadow bg-white z-[99] ${isPageScrolled ? 'shadow-header' : ''}`}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className=" py-2 xl:py-0">
                        <Link to="/" className="block w-[150px]">
                            <img src={logo} alt="Територія Безпеки" className="w-full" />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="inline-block cursor-pointer xl:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
                            {isMenuOpen ? (
                                <IoClose size={35} />
                            ) : (
                                <IoMenu size={35} />
                            )}
                        </div>
                        <nav className='uppercase'>
                            <ul className={`fixed xl:relative top-0 xl:top-auto left-0 xl:left-auto right-0 xl:right-auto bottom-0 xl:bottom-auto w-full z-[-1] xl:z-auto bg-white transition duration-200 xl:translate-x-0 flex justify-center xl:justify-between items-center flex-col xl:flex-row gap-1 xl:gap-12 px-2 xl:px-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                                <li className="py-3 xl:py-6">
                                    <Link to="/" className="font-bold transition-colors hover:text-blue-50">Головна</Link>
                                </li>
                                <li className="py-3 xl:py-6">
                                    <Link to="/about" className="font-bold transition-colors hover:text-blue-50">Про компанію</Link>
                                </li>
                                <li className="group relative py-3 xl:py-6 text-center xl:text-left" onClick={dropdownHandler}>
                                    <span className="font-bold cursor-pointer xl:cursor-default transition-colors hover:text-blue-50">Послуги</span>
                                    <ul className={`xl:absolute xl:left-[-80px] xl:invisible transition ease-in-out duration-150 xl:opacity-0 xl:translate-y-8 xl:group-hover:visible xl:group-hover:opacity-100 xl:group-hover:translate-y-4 mt-[15px] xl:mt-0 xl:shadow-md bg-white xl:min-w-[320px] ${isDropdownOpen ? 'relative visible opacity-100' : 'absolute invisible opacity-0'}`}>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Охоронна сигналізація</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Автоматизація та диспетчеризація інженерних систем</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Структуровані кабельні системи (СКС)</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Електромонтажні роботи</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Системи пожежної безпеки</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Мультимедійні системи</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Системи контролю доступу (СКУД)</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white">Відеоспостереження</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="py-3 xl:py-6">
                                    <Link to="#contacts" className="font-bold transition-colors hover:text-blue-50">Контакти</Link>
                                </li>
                                <li>
                                    <Button color="blue">Зв'язатися з нами</Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar