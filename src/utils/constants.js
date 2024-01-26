import homeHeroImg from '../assets/password.svg'
import aboutHeroImg from '../assets/about-hero.svg'
import alarmHeroVideo from '../assets/6.mp4'
import automationHeroVideo from '../assets/2.mp4'

export const heroHome = {
    title: 'ТОВ Інженерно-будівельна компанія "Територія Безпеки"',
    text: [
        'Системи безпеки, електромонтажні роботи.',
        'Комплексні системи безпеки - це комплекс інженерних систем, що забезпечують безпеку на території об\'єкта, що захищається. Комплексна система безпеки є єдиною системою охорони та безпеки, яка складається з системи відеоспостереження, охоронно-пожежної сигналізації, системи контролю доступу та інших функціональних елементів, які можуть працювати централізовано з єдиним пультом управління.',
    ],
    img: homeHeroImg,
    anchor: '#complex-security-systems'
}

export const heroAbout = {
    title: 'Компанія',
    text: [
        'Компанія ТОВ «ІБК «Територія Безпеки» пропонує проектування, встановлення та обладнання Комплексних систем безпеки (КСБ) за доступними цінами. Замовити послуги та купити необхідне обладнання та комплектуючі можна на сайті <b>www.t-security.com.ua.</b>',
        'Кваліфіковані фахівці допоможуть організувати захист і контроль над об\'єктом, що охороняється.',
    ],
    img: aboutHeroImg,
    anchor: '#about-info'
}

export const heroAlarm = {
    title: 'Охоронна сигналізація',
    text: [],
    video: alarmHeroVideo,
    anchor: '#alarm-info'
}

export const heroAutomation = {
    title: 'Автоматизація та диспетчеризація інженерних систем',
    text: [],
    video: automationHeroVideo,
    anchor: '#automation-info'
}