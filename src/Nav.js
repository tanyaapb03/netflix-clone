import React,{useState, useEffect,handleShow } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleshow]=  useState(false);
        
    const transitionNavBar =() =>{
        if (window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false)
        } 
        }
    
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener('scroll',transitionNavBar);
        
        },[]);
    
    return (
        <div className="nav nav_black">
            <div className="nav_contents">
                {/* logo */}
                <img className="nav_logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
                />
                {/* avatar */}
                <img className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                atl=""
                />
            </div>

        </div>
    )
}

export default Nav
