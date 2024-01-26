import CommonHero from '../scenes/CommonHero'
import AutomationInfo from '../scenes/AutomationInfo'
import { heroAutomation } from '../utils/constants'

const AutomationPage = () => {
    return (
        <>
            <CommonHero data={heroAutomation} />
            <AutomationInfo />
        </>
    )
}

export default AutomationPage