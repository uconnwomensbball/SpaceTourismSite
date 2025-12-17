import { NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Crew(){
    const [searchParams] = useSearchParams()
    const crewFilter = searchParams.get("name") || "hurley"
    const crewData = data.crew
    const filteredCrew = crewData.filter(member=>{
        return crewFilter === member.name.split(" ").pop().toLowerCase()})

    return (
        <div className="crew-div">
            <div className="crew-details-div">   
                <h2 className="white-text"><span className="dark-gray-text bold">02 </span>MEET YOUR CREW</h2>
                <h2 className="dark-gray-text">{filteredCrew[0].role.toUpperCase()}</h2>
                <h1 className="white-text">{filteredCrew[0].name.toUpperCase()}</h1>
                <p className="light-blue-text">{filteredCrew[0].bio}</p>
                <nav className = "crew-nav">
                    <NavLink to="?name=hurley" className={`crew-nav-links ${crewFilter === "hurley"? "crew-nav-links-active": null}`}></NavLink>
                    <NavLink to="?name=shuttleworth" className={`crew-nav-links ${crewFilter === "shuttleworth"? "crew-nav-links-active": null}`}></NavLink>
                    <NavLink to="?name=glover" className={`crew-nav-links ${crewFilter === "glover"? "crew-nav-links-active": null}`}></NavLink>
                    <NavLink to="?name=ansari" className={`crew-nav-links ${crewFilter === "ansari"? "crew-nav-links-active": null}`}></NavLink>
                </nav>
            </div>
            <img className = "crew-img" src={`${filteredCrew[0].images.png}`}/>
        </div>
    )
}