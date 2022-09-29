import './Feature.css'
import React from 'react'

function Feature(props) {

    return (
        <>
            <div className="info">
                <div className="info-text">
                    <div className="info-title">{props.icon} {props.title}</div>
                    <div className="info-description">{props.text}</div>
                </div>
                <div className='info-image-wrapper'>
                    <img src={props.image} alt="" className="info-image" />
                </div>
            </div>
        </>
    );
}

export default Feature;