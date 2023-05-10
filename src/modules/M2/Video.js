import React from 'react'
import '../../sass/Modules/M2/video.scss'

export const Video = () => {
    return (
        <div className="video">
            <span>Watch this video to help you fill out the matrix for the next task  !</span>
            <iframe className='video-frame' src="https://www.youtube.com/embed/yG9tN8vPPzk" title="YouTube video player" allowFullScreen></iframe>
        </div>
    )
}
