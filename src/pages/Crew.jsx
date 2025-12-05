import { Link, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Crew(){
    const [searchParams] = useSearchParams()
    const crewFilter = searchParams.get("name") || "hurley"
    const crewData = data.crew

    const filteredCrew = crewData.filter(member=>{
        return crewFilter === member.name.split(" ").pop().toLowerCase()})

    return (
        <div className="crew-div">
            <p>02 Meet your crew</p>
            <nav className = "crew-nav">
                <Link to="?name=hurley" className="crew-link"></Link>
                <Link to="?name=shuttleworth" className="crew-link"></Link>
                <Link to="?name=glover" className="crew-link"></Link>
                <Link to="?name=ansari" className="crew-link"></Link>
            </nav>
            <h2 className="dark-gray-text">{filteredCrew[0].role}</h2>
            <h1 className="white-text">{filteredCrew[0].name}</h1>
            <p className="light-blue-text">{filteredCrew[0].bio}</p>
            <img src={`${filteredCrew[0].images.png}`}/>
        </div>
    )
}