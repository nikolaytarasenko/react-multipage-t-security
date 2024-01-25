import CommonHero from '../scenes/CommonHero'
import ComplexSecuritySystems from '../scenes/ComplexSecuritySystems'
import Benefits from '../scenes/Benefits'
import { heroHome } from '../utils/constants'

const HomePage = () => {
    return (
        <>
            <CommonHero data={heroHome} />
            <ComplexSecuritySystems />
            <Benefits />
        </>
    )
}

export default HomePage