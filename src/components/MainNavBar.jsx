import { Link } from "react-router-dom"

export default function MainNavBar(){
    return (
        <div className="main-nav-bar-div">
            <img src="\src\assets\shared\logo.svg"/>
            <div>
                <Link to="/"><span className="bold">00</span> Home</Link>
                <Link to="/destination/moon"><span className="bold">01</span> Destination</Link>
                <Link to="/crew/hurley"><span className="bold">02</span> Crew</Link>
                <Link to="/technology/launchvehicle"><span className="bold">03</span> Technology</Link>
            </div>
        </div>
    )
}