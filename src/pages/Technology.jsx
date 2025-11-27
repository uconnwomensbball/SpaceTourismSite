import { Link } from "react-router-dom"

export default function Technology(){
    return (
        <div className = "tech-div">
            <p>03 Space Launch 101</p>
            <div className="tech-nav">
                <Link to="/technology/launchvehicle" className="tech-link">1</Link>
                <Link to="/technology/spaceport" className="tech-link">2</Link>
                <Link to="/technology/capsule" className="tech-link">3</Link>
            </div>
        </div>
    )
}