import React from 'react'
import "./Banner.css";

function Banner() {
    return (
        <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/Netflix.jpg")`,
            backgroundPosition:"center center",

        }}>
            <div className="banner_contents">
                <h1 className="banner_title"> Movie Name </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">More Info</button>
                </div>
                <h1 className="banner_discription"> this is where  movie description comes</h1>
            
            </div>
            <div className="banner_fadebutton"></div>
            
        </header>
    )
}

export default Banner
