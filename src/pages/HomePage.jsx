import CommonHero from '../scenes/CommonHero'
import ComplexSecuritySystems from '../scenes/ComplexSecuritySystems'
import Benefits from '../scenes/Benefits'
import Attention from '../scenes/Attention'
import { heroHome } from '../utils/constants'

const HomePage = () => {
    return (
        <>
            <CommonHero data={heroHome} />
            <ComplexSecuritySystems />
            <Benefits />
            <Attention />
        </>
    )
}

export default HomePage