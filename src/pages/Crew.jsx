import { NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Crew(){
    const [searchParams] = useSearchParams()
    const crewFilter = searchParams.get("name") || "hurley"
    const crewData = data.crew
    const filteredCrew = crewData.filter(member=>{
        return crewFilter === member.name.split(" ").pop().toLowerCase()})

    return (
        <main className="crew-main">
            <div className="crew-details-div">   
                <h2 className="white-text"><span className="dark-gray-text bold">02 </span>MEET YOUR CREW</h2>
                <h2 className="dark-gray-text">{filteredCrew[0].role.toUpperCase()}</h2>
                <h1 className="white-text">{filteredCrew[0].name.toUpperCase()}</h1>
                <p className="light-blue-text">{filteredCrew[0].bio}</p>
                <nav className = "crew-nav" aria-label="crew selector">
                    <NavLink 
                        to="?name=hurley" 
                        className={`crew-nav-links ${filteredCrew === "hurley"? "crew-nav-links-active": null}`} 
                        aria-label="Douglas Hurley" 
                        aria-current={filteredCrew === "hurley" ? "page" : undefined}></NavLink>
                    <NavLink 
                        to="?name=shuttleworth" 
                        className={`crew-nav-links ${filteredCrew === "shuttleworth"? "crew-nav-links-active": null}`} 
                        aria-label="Mark Shuttleworth" 
                        aria-current={filteredCrew === "shuttleworth" ? "page" : undefined}></NavLink>
                    <NavLink 
                        to="?name=glover" 
                        className={`crew-nav-links ${filteredCrew === "glover"? "crew-nav-links-active": null}`} 
                        aria-label="Victor Glover" 
                        aria-current={filteredCrew === "glover" ? "page" : undefined}></NavLink>
                    <NavLink 
                        to="?name=ansari" 
                        className={`crew-nav-links ${filteredCrew === "ansari"? "crew-nav-links-active": null}`} 
                        aria-label="Anousheh Ansari" 
                        aria-current={filteredCrew === "ansari" ? "page" : undefined}></NavLink>
                </nav>
            </div>
            <img className = "crew-img" src={`${filteredCrew[0].images.png}`} alt={`${filteredCrew[0].name}`}/>
        </main>
    )
}