import { Link } from "react-router-dom"
export default function Crew(){
    return (
        <div className="crew-div">
            <p>02 Meet your crew</p>
            <nav className = "crew-nav">
                <Link to="/crew/hurley" className="crew-link"></Link>
                <Link to="/crew/shuttleworth" className="crew-link"></Link>
                <Link to="/crew/glover" className="crew-link"></Link>
                <Link to="/crew/ansari" className="crew-link"></Link>
            </nav>
        </div>
    )
}