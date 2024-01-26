import CommonHero from '../scenes/CommonHero'
import AlarmInfo from '../scenes/AlarmInfo'
import { heroAlarm } from '../utils/constants'

const AlarmPage = () => {
    return (
        <>
            <CommonHero data={heroAlarm} />
            <AlarmInfo />
        </>
    )
}

export default AlarmPage