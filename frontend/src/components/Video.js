import React from 'react'
import '../sass/Video.scss'

export const Video = ({ headerText, url }) => {
    return (
        <div className="video">
            <span>{headerText}</span>
            <iframe className='video-frame' src={url} title="YouTube video player" allowFullScreen></iframe>
        </div>
    )
}
