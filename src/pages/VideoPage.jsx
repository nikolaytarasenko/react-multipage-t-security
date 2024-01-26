import CommonHero from '../scenes/CommonHero'
import VideoInfo from '../scenes/VideoInfo'
import { heroVideo } from '../utils/constants'

const VideoPage = () => {
    return (
        <>
            <CommonHero data={heroVideo} />
            <VideoInfo />
        </>
    )
}

export default VideoPage