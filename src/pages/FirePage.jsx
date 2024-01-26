import CommonHero from '../scenes/CommonHero'
import FireInfo from '../scenes/FireInfo'
import { heroFire } from '../utils/constants'

const FirePage = () => {
    return (
        <>
            <CommonHero data={heroFire} />
            <FireInfo />
        </>
    )
}

export default FirePage