import CommonHero from '../scenes/CommonHero'
import ElectricalInfo from '../scenes/ElectricalInfo'
import { heroElectrical } from '../utils/constants'

const ElectricalPage = () => {
    return (
        <>
            <CommonHero data={heroElectrical} />
            <ElectricalInfo />
        </>
    )
}

export default ElectricalPage