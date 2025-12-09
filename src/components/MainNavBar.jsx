import { NavLink } from "react-router-dom"

export default function MainNavBar(){
    return (
        <div className="main-nav-bar-div">
            <img src="\src\assets\shared\logo.svg"/>
            <div className="main-nav-bar-line"></div>
            
            <div className="main-nav-bar-links-div">
                <NavLink
                    to="/"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}><span className="bold">00</span> HOME</NavLink>
                <NavLink 
                    to="/destination"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}><span className="bold">01</span> DESTINATION</NavLink>
                <NavLink 
                    to="/crew"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}><span className="bold">02</span> CREW</NavLink>
                <NavLink  
                    to="/technology"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}><span className="bold">03</span> TECHNOLOGY</NavLink>
            </div>
        </div>
    )
}