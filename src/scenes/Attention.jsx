import attentionImg from '../assets/attention.svg'

const Attention = () => {
    return (
        <div className="pt-[20px] pb-[50px]">
            <div className="container">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-[30px] bg-red-50 rounded-[15px] p-[20px]">
                    <div>
                        <p className="text-white mb-[20px]">Компанія ТОВ «ІБК «Територія Безпеки» пропонує проектування, встановлення та обладнання систем безпеки за доступними цінами. Замовити послуги та купити необхідне обладнання та комплектуючі можна на сайті <strong>www.t-security.com.ua</strong>.</p>
                        <p className="text-white"><strong>Кваліфіковані фахівці</strong> допоможуть організувати захист і контроль над об'єктом, що охороняється.</p>
                    </div>
                    <div className='min-w-[92px]'>
                        <img src={attentionImg} alt="Attention" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attention