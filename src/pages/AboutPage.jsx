import CommonHero from '../scenes/CommonHero'
import AboutInfo from '../scenes/AboutInfo'
import { heroAbout } from '../utils/constants.js'

const AboutPage = () => {
    return (
        <>
            <CommonHero data={heroAbout} />
            <AboutInfo />
        </>
    )
}

export default AboutPage