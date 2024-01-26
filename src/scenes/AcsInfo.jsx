const AcsInfo = () => {
    return (
        <div className="py-[50px]" id="acs-info">
            <div className="container">
                <p className="mb-8">Автоматична система управлінням в'їзду та виїзду транспорту на територію, виходу та входу людей у будівлю/приміщення – система контролю та управління доступом (СКУД), покликана максимально покращити систему безпеки на території, що охороняється. Ця система виконує багато функцій, потребує ретельного проектування, монтажу та постійного обслуговування.</p>
                <p className="mb-8">Система контролю та управління доступом (СКУД) є електронною пропускною системою (турнікети, шлагбауми) та пластикові картки доступу, які видаються кожному співробітнику. Ці картки несуть у собі інформацію про власника: особисті дані, посада, режим роботи. Також йде фіксування точного часу, коли ця картка використовувалася для проходу на території підприємства. Крім пластикових карток, для отримання доступу можуть бути використані ключі-брелоки, стікери, відбитки пальців, сканування сітківки ока. Усі форми отримання доступу залежать від рівня системи контролю та таємності об'єкта: найпростіші та широко використовувані – пластикові карти, найскладніші – сканування сітківки ока.</p>
                <h3 className="text-center text-[24px] xl:text-[36px] leading-[1.2] xl:leading-[1.3] font-bold my-[40px]">Якими б не були носії інформації, всі СКУД складається з:</h3>
                <ul className="mb-8 ml-8 list-disc">
                    <li>Пристрій ідентифікації (зчитувач);</li>
                    <li>Контролер (мозок системи);</li>
                    <li>Виконавчий пристрій (пропускний).</li>
                </ul>
                <p className="mb-8">Вся система управляється комп'ютерною програмою, яка контролює доступ, а й веде облік робочого дня, записує протокол всіх подій. Багато СКУД оснащені охоронною та протипожежною системою та поділяються на 3 види:</p>
                <ul className="mb-8 ml-8 list-disc">
                    <li>Автономна система – управляє доступом без передачі на контрольний пункт і не управляється оператором;</li>
                    <li>Центральна (мережева) система контролю доступу – передає всю інформацію про події на центральний пункт охорони (сервер) та керується оператором;</li>
                    <li>Універсальні системи – працюють як автономні, і, у разі потреби, мережеві системи контролю доступом.</li>
                </ul>
            </div>
        </div>
    )
}

export default AcsInfo