import CommonHero from '../scenes/CommonHero'
import AcsInfo from '../scenes/AcsInfo'
import { heroAcs } from '../utils/constants'

const AcsPage = () => {
    return (
        <>
            <CommonHero data={heroAcs} />
            <AcsInfo />
        </>
    )
}

export default AcsPage