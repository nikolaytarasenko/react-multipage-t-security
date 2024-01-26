import CommonHero from '../scenes/CommonHero'
import MultimediaInfo from '../scenes/MultimediaInfo'
import { heroMultimedia } from '../utils/constants'

const MultimediaPage = () => {
    return (
        <>
            <CommonHero data={heroMultimedia} />
            <MultimediaInfo />
        </>
    )
}

export default MultimediaPage