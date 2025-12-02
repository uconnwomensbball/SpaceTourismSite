import { Link } from "react-router-dom"

export default function MainNavBar(){
    return (
        <div className="main-nav-bar-div">
            <img src="\src\assets\shared\logo.svg"/>
            <div>
                <Link to="/"><span className="bold">00</span> HOME</Link>
                <Link to="/destination/moon"><span className="bold">01</span> DESTINATION</Link>
                <Link to="/crew/hurley"><span className="bold">02</span> CREW</Link>
                <Link to="/technology/launchvehicle"><span className="bold">03</span> TECHNOLOGY</Link>
            </div>
        </div>
    )
}