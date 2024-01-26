import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import { IoMenu, IoClose } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({ isPageScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        isMenuOpen ?
            document.body.classList.add('overflow-hidden') :
            document.body.classList.remove('overflow-hidden')
    }, [isMenuOpen])

    const xlMediaQuery = '(max-width: 1199px)'

    const dropdownHandler = () => {
        if (window.matchMedia(xlMediaQuery).matches) {
            setIsDropdownOpen(prev => !prev)
        }
    }

    const closeMenuHandler = () => {
        if (window.matchMedia(xlMediaQuery).matches) {
            setIsMenuOpen(false)
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
                            <ul className={`nav-ul fixed xl:relative top-0 xl:top-auto left-0 xl:left-auto right-0 xl:right-auto bottom-0 xl:bottom-auto w-full z-[-1] xl:z-auto bg-white transition duration-200 xl:translate-x-0 block text-center xl:text-left xl:flex xl:justify-between xl:items-center xl:flex-row xl:gap-12 px-2 xl:px-0 pt-[150px] pb-[40px] xl:pt-0 xl:pb-0 overflow-auto xl:overflow-visible ${isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                                <li className="py-3 xl:py-6">
                                    <Link to="/" className="font-bold transition-colors hover:text-blue-50" onClick={closeMenuHandler}>Головна</Link>
                                </li>
                                <li className="py-3 xl:py-6">
                                    <Link to="/about" className="font-bold transition-colors hover:text-blue-50" onClick={closeMenuHandler}>Про компанію</Link>
                                </li>
                                <li className="group relative py-3 xl:py-6 text-center xl:text-left" onClick={dropdownHandler}>
                                    <span className="font-bold cursor-pointer xl:cursor-default transition-colors hover:text-blue-50">
                                        Послуги
                                        <MdKeyboardArrowDown size={20} className="inline-block ml-1 pb-[2px]" />
                                    </span>
                                    <ul className={`xl:absolute xl:left-[-80px] xl:invisible transition ease-in-out duration-150 xl:opacity-0 xl:translate-y-8 xl:group-hover:visible xl:group-hover:opacity-100 xl:group-hover:translate-y-4 mt-[15px] xl:mt-0 xl:shadow-md bg-white xl:min-w-[320px] ${isDropdownOpen ? 'relative visible opacity-100' : 'absolute invisible opacity-0'}`}>
                                        <li>
                                            <Link to="/alarm" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Охоронна сигналізація</Link>
                                        </li>
                                        <li>
                                            <Link to="/automation" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Автоматизація та диспетчеризація інженерних систем</Link>
                                        </li>
                                        <li>
                                            <Link to="/scs" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Структуровані кабельні системи (СКС)</Link>
                                        </li>
                                        <li>
                                            <Link to="/electrical" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Електромонтажні роботи</Link>
                                        </li>
                                        <li>
                                            <Link to="/fire" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Системи пожежної безпеки</Link>
                                        </li>
                                        <li>
                                            <Link to="/multimedia" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Мультимедійні системи</Link>
                                        </li>
                                        <li>
                                            <Link to="/acs" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Системи контролю доступу (СКУД)</Link>
                                        </li>
                                        <li>
                                            <Link to="/video" className="block text-[14px] normal-case xl:text-[14px] transition-colors py-2 px-3 hover:bg-blue-50 hover:text-white" onClick={closeMenuHandler}>Відеоспостереження</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="py-3 xl:py-6">
                                    <AnchorLink href="#contacts" className="font-bold transition-colors hover:text-blue-50" offset="70" onClick={closeMenuHandler}>Контакти</AnchorLink>
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