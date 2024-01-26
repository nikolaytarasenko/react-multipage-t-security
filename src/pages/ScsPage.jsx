import CommonHero from '../scenes/CommonHero'
import ScsInfo from '../scenes/ScsInfo'
import { heroScs } from '../utils/constants'

const ScsPage = () => {
    return (
        <>
            <CommonHero data={heroScs} />
            <ScsInfo />
        </>
    )
}

export default ScsPage