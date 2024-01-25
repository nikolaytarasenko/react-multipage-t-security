import person from '../assets/benefits.svg'
import arrows from '../assets/arrows.svg'

const Benefits = () => {
    return (
        <div className="py-[60px] xl:py-[140px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-[30px] mb-[30px] xl:mb-0 xl:gap-0">
                        <div className="max-w-[464px]">
                            <img src={person} alt="Переваги встановлення комплексних систем безпеки" />
                        </div>
                        <div className="flex-1 text-center">
                            <div className="relative">
                                <h2 className="text-[24px] font-bold mb-[20px]">Переваги встановлення комплексних систем безпеки</h2>
                                <p>Основні переваги комплексного підходу до монтажу<br />технічних систем безпеки</p>
                                <div className="hidden xl:block absolute w-[555px] top-[100%] left-[65px]">
                                    <img src={arrows} alt="Arrows" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full xl:max-w-[954px] w-full xl:self-end xl:mt-[-35px]">
                        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-stretch mb-[30px] xl:mb-[50px]">
                            <div className="max-w-[390px] bg-blue-50 rounded-[15px] py-[18px] px-[25px] text-center mb-[30px] xl:mb-0">
                                <p className="text-white">Оперативність - встановлення систем безпеки забезпечує оперативний збір та передачу інформації на центральний пульт управління.</p>
                            </div>
                            <div className="max-w-[390px] bg-blue-50 rounded-[15px] py-[18px] px-[25px] text-center flex justify-center items-center">
                                <p className="text-white">Інтегрованість всіх систем у єдиний інформаційний простір.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-[390px] bg-blue-50 rounded-[15px] py-[18px] px-[25px] text-center">
                                <p className="text-white">При правильному проектуванні, монтажі та грамотному технічному обслуговуванні комплексних систем безпеки забезпечується високий ступінь безпеки об'єктів, що захищаються.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits