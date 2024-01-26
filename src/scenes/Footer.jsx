import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="pt-[50px] pb-[70px]">
            <div className="container">
                <div className="flex justify-between items-center xl:items-start flex-col xl:flex-row gap-[40px] xl:gap-0 text-center xl:text-left">
                    <div>
                        <Link to="/" className="w-[150px] inline-block">
                            <img src={logo} alt="Територія Безбеки" className="w-full" />
                        </Link>
                    </div>
                    <div>
                        <h3 className="uppercase text-blue-50 mb-4 font-bold">Меню</h3>
                        <ul>
                            <li>
                                <Link to="/" className="uppercase font-bold transition-colors hover:text-blue-50 mb-[7px] block">Головна</Link>
                            </li>
                            <li>
                                <Link to="/about" className="uppercase font-bold transition-colors hover:text-blue-50 mb-[7px] block">Компанія</Link>
                            </li>
                            <li>
                                <AnchorLink href="#contacts" className="uppercase font-bold transition-colors hover:text-blue-50 mb-[7px] block">Контакти</AnchorLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase text-blue-50 mb-4 font-bold">Соц. мережі</h3>
                        <div className="flex items-center gap-[15px]">
                            <a href="#" className="transition-opacity hover:opacity-70">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="#" className="transition-opacity hover:opacity-70">
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="#" className="transition-opacity hover:opacity-70">
                                <img src={telegram} alt="Telegram" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="uppercase text-blue-50 mb-4 font-bold">Адреса</h3>
                        <p className="font-bold">Проспект Перемоги,<br />136, Київ, 03115</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
