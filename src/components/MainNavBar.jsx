import { Link } from "react-router-dom"

export default function MainNavBar(){
    return (
        <div className="main-nav-bar-div">
            <img src="\src\assets\shared\logo.svg"/>
            <div className = "white-text">
                <Link to="/" className = "white-text"><span className="bold">00</span> HOME</Link>
                <Link to="/destination" className="white-text"><span className="bold">01</span> DESTINATION</Link>
                <Link to="/crew" className="white-text"><span className="bold">02</span> CREW</Link>
                <Link to="/technology" className="white-text"><span>03</span> TECHNOLOGY</Link>
            </div>
        </div>
    )
}