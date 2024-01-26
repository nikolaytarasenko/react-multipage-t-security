import img1 from '../assets/first-col.svg'
import img2 from '../assets/second-col-nth.svg'
import img3 from '../assets/third-col.svg'

const ComplexSecuritySystems = () => {
    return (
        <div className="bg-blue-50 pb-[80px] overflow-y-hidden" id="complex-security-systems">
            <div className="container">
                <h3 className="py-[50px] xl:py-[80px] max-w-[500px] mx-auto text-white text-[21px] leading-[31px] text-center">Монтаж комплексних систем безпеки проводять для забезпечення повного контролю території, що охороняється. До складу комплексних систем безпеки входять:</h3>
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between items-center text-center">
                    <div className="relative">
                        <div className="hidden xl:block absolute max-w-[186px] bottom-[90%] left-[92px] z-1">
                            <img src={img1} alt="Відеоспостереження" />
                        </div>
                        <div className="relative z-10 bg-white p-[20px] rounded-[5px] max-w-[380px]">
                            <p><strong>Відеоспостереження.</strong> Комплект відеоспостереження забезпечує цілодобове стеження за об'єктом, як зовні, так і всередині. Відеоспостереження ефективне для охорони адміністративних будівель, великих та дрібних промислових підприємств, приватних будинків та складських приміщень.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 bg-white p-[20px] rounded-[5px] max-w-[380px] mb-[30px] xl:mb-[100px]">
                            <p><strong>Контроль доступу</strong> – це перше, про що потрібно потурбуватися підприємству. Охорона яка не завжди справляється з поставленим завданням, та й людський чинник іноді грає значної ролі. Автоматизований доступ – це встановлення дверей різного рівня доступу, турнікетів, шлагбаумів, сканерів осіб та автомобільних номерів.</p>
                        </div>
                        <div className="hidden xl:block absolute max-w-[80px] bottom-[165px] left-[145px] z-1">
                            <img src={img2} alt="Контроль доступу" />
                        </div>
                        <div className="relative z-10 bg-white p-[20px] rounded-[5px] max-w-[380px]">
                            <p><strong>Охоронна сигналізація</strong> встановлюється для захисту приміщень від проникнення третіх осіб у квартири, будинки, периметри територій, будівель.</p>
                        </div>
                    </div>
                    <div className="relative xl:top-[-30px]">
                        <div className="hidden xl:block absolute max-w-[184px] top-[-500px] right-[98px] z-1">
                            <img src={img3} alt="Автоматичні системи протипожежної безпеки" />
                        </div>
                        <div className="relative z-10 bg-white p-[20px] rounded-[5px] max-w-[380px]">
                            <p><strong>Автоматичні системи протипожежної безпеки</strong> – та системи оповіщення про пожежу – це засоби раннього виявлення пожежі та попередження про небезпеку займання. Існує кілька типів обладнання адресні та неадресні, які реагують на дим, підвищення температури, полум'я. Системи оповіщення бувають мовні, звукові, світло- та світлозвукові.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplexSecuritySystems