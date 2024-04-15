import "./navbar.scss"
import logo from "./logo.png"
import menuIcon from "./menu.png"
import { useState } from "react"
function Navbar(){
    const [open,setOpen]=useState(false)
return (
    <nav>
        <div className="left">
            <a className="logo" href="#">
                <img  src={logo} alt="" />
                <span>Roomeo</span>
            </a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Info</a>
        </div>

        <div className="right">
            <a href="#">Sign in</a>
            <a href="#" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src={menuIcon} alt="hamburger" onClick={()=>setOpen(prev=>!prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Info</a>
                    <a href="#">sign in</a>
                    <a href="#">sign up</a>
                </div>
        </div>
    </nav>
)
}

export default Navbar;