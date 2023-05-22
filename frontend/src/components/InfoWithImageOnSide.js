import React from 'react'
import '../sass/InfoWithImageOnSide.scss'




export const InfoWithImageOnSide = ({ Title, NumbersTitles, NumbersInformation, Image }) => {
    return (
        <div className="infoWithImageOnSide">
            <h1>{Title}</h1>
            <div className="information-wrapper">
                <div className="nbrs">
                    {NumbersTitles.map((title, index) => (
                        <>
                            <h2>{title}</h2>
                            <ul>
                                {NumbersInformation[index].map((info, i) => (
                                    <li key={i}>{info}</li>
                                ))}
                            </ul>
                        </>

                    ))}
                </div>
                <div className="img-wrapper">
                    <img src={Image} alt="circleGraph" />

                </div>
            </div>
        </div>
    );
};




