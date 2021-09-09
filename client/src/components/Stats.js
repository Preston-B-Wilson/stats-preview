import React from 'react'
import heroDesktop from './../images/image-header-desktop.jpg'
import heroMobile from './../images/image-header-mobile.jpg'

function imageState(image) {
    if (image == 'heroDesktop') {
        return heroDesktop;
    } else if (image == 'heroMobile') {
        return heroMobile;
    }
}

const Stats = (props) => {

    return (
        <div className="root-wrapper">
            <div id="main-container" style={{transform: props.resizeTransform}}>
                <div id="content-container">
                    <h1 id="title-main">Get <span id="title-main-highlight">insights</span> {props.title}</h1>
                    <p id="description-main">{props.description}</p>
                    <div id="stats-container">
                        <div className="stat-container">
                            <h1 className="stat-title">10k+</h1>
                            <p className="stat-description">COMPANIES</p>
                        </div>
                        <div className="stat-container">
                            <h1 className="stat-title">314</h1>   
                            <p className="stat-description">TEMPLATES</p>
                        </div>
                        <div className="stat-container">
                            <h1 className="stat-title">12M+</h1>
                            <p className="stat-description">QUERIES</p>
                        </div>
                    </div>
                </div>
                <div id="hero-container" style={{ backgroundImage: `url(${imageState(props.image)})` }}>
                    <div id="hero-filter"></div>
                </div>
            </div>
        </div>
    )
}

export default Stats
