import React from 'react'
import '../sass/ImageWithHeader.scss'


export const ImageWithHeader = ({ Title, Image }) => {
    return (
        <div className="image-container">
            <h1>{Title}</h1>
            <img src={Image} alt='m0' />
        </div>
    )
}

