import React from 'react'
import heroDesktop from './../images/image-header-desktop.jpg'

const Stats = () => {
    return (
        <div className="root-wrapper">
            <div id="main-container">
                <div id="content-container">
                    <h1 id="title-main">Get <span id="title-main-highlight">insights</span> {'that help \n your business grow.'}</h1>
                    <p id="description-main">{
                        'Discover the benefits of data analytics and make \n \
                        better decisions regarding revenue, customer \n \
                        experience, and overall efficiency.'
                    }</p>
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
                <div id="hero-container" style={{ backgroundImage: `url(${heroDesktop})` }}>
                    <div id="hero-filter"></div>
                </div>
            </div>
        </div>
    )
}

export default Stats
