import CommonHero from '../scenes/CommonHero'
import ComplexSecuritySystems from '../scenes/ComplexSecuritySystems'
import { heroHome } from '../utils/constants'

const HomePage = () => {
    return (
        <>
            <div className="container">
                <CommonHero data={heroHome} />
            </div>
            <ComplexSecuritySystems />
        </>
    )
}

export default HomePage