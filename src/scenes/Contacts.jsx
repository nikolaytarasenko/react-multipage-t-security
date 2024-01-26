import contactsImg from '../assets/contacts.svg'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import Button from '../components/Button'

const Contacts = () => {
    return (
        <div className="bg-blue-50 py-[50px] text-white overflow-y-hidden" id="contacts">
            <div className="container">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-[50px]">
                    <div className="flex flex-col items-center w-full xl:w-[50%] text-center">
                        <h2 className="mb-[20px] text-[36px] font-bold">Завжди на зв'язку!</h2>
                        <p className="mb-[20px]">Чи готові почати свій наступний проект з нами? Чудово! Зателефонуйте нам або надішліть нам листа, і ми зв'яжемося з вами якнайшвидше!</p>
                        <div className="flex flex-wrap justify-center gap-[30px] mb-[30px] xl:mb-[20px]">
                            <a href="tel:+380662458535" className="transition-opacity hover:opacity-80 flex justify-center items-center gap-[20px]">
                                <span><img src={phone} alt="Phone" /></span>
                                <span>+38 (066) 245 85 35</span>
                            </a>
                            <a href="tel:+380442237273" className="transition-opacity hover:opacity-80 flex justify-center items-center gap-[20px]">
                                <span><img src={phone} alt="Phone" /></span>
                                <span>+38 (044) 223 72 73</span>
                            </a>
                            <a href="mailto:t-security@ukr.net" className="transition-opacity hover:opacity-80 flex justify-center items-center gap-[20px]">
                                <span><img src={mail} alt="Mail" /></span>
                                <span>t-security@ukr.net</span>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <Button color="white">Зв'язатися з нами</Button>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] relative flex justify-center xl:justify-start">
                        <iframe
                            className="w-[400px] h-[300px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1602730048103!2d30.3633147158837!3d50.456740094792465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc91b1df271f%3A0xc4e7575dd6228554!2z0KLQpiBWTUIsINC_0YDQvtGB0L8uINCf0L7QsdC10LTRiywgMTM2LCDQmtC40LXQsiwgMDMxMTU!5e0!3m2!1sru!2sua!4v1658220407200!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="hidden xl:block absolute bottom-[-60px] right-0 w-[286px] h-[421px]">
                            <img src={contactsImg} alt="Contacts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts