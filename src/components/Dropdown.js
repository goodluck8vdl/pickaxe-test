import React, { useState, useEffect, useRef } from 'react';
import './../assets/style.css';
import man from "./../i/man.png";

function Dropdown() {
    const wrapperRef = useRef(null);
    const [ displayMenu, setState ] = useState(false);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);
    
    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setState(false);
        }
    };

    const showDropdownMenu = () => {
        setState(v => { console.log(v); return !v}); 
    }
      
    return (
        <div className="navBtn" onClick={showDropdownMenu} ref={wrapperRef}>
            <div className="profile-picture"><img src={man} alt="navOPen"/></div>
            <div className= "userName">John Doe </div> 
        
            {displayMenu && (
                <div className="dropdownContent">
                    <ul> 
                        <li className="userInfo">   
                            <div className="profile-picture"><img src={man} alt="navOPen"/></div>
                            <div className= "userName">John Doe</div> 
                        </li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Setting">My Account</a></li>
                        <li><a href="#Log Out">Log Out</a></li>
                    </ul>
                </div>
            )}
        </div>
    )   
}

export default Dropdown;
