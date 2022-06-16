import React, { useEffect, useState } from "react"
import "./Navbar.css"

const Navbar = () => {
    //fazer a barra preta aparecer quando descer o scroll 100px
    const [show, setHandleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                setHandleShow(true)
            } else {
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    },[]);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img 
                className="nav-avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Navbar;