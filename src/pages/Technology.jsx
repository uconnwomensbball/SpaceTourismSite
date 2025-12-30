import { NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Technology(){
    const [searchParams] = useSearchParams()
    const technologyFilter = searchParams.get("technology") || "launchvehicle"
    const technologyData = data.technology
    
    const filteredTechnology = technologyData.filter(function(tech){
        return technologyFilter === tech.name.replace(/\s+/g, "").toLowerCase() 
    })
  
    return (
        <main className = "tech-main">
            <div className="tech-content-div">
                <nav className="tech-nav" aria-label="technology selector">
                    <NavLink 
                        to="?technology=launchvehicle"
                        className={`tech-nav-links ${technologyFilter==="launchvehicle"? "tech-nav-links-active": null}`}
                        aria-label="launch vehicle"
                        aria-current={technologyFilter==="launchvehicle" ? "page" : undefined}>1</NavLink>
                    <NavLink 
                        to="?technology=spaceport" 
                        className={`tech-nav-links ${technologyFilter==="spaceport"? "tech-nav-links-active": null}`}
                        aria-label="spaceport"
                        aria-current={technologyFilter==="spaceport" ? "page" : undefined}>2</NavLink>
                    <NavLink 
                        to="?technology=spacecapsule" 
                        className={`tech-nav-links ${technologyFilter==="spacecapsule"? "tech-nav-links-active": null}`}
                        aria-label="spacecapsule"
                        aria-current={technologyFilter==="spacecapsule" ? "page" : undefined}>3</NavLink>
                </nav>
            <div className="tech-details-div"> 
                <h2 className="white-text"><span className="dark-gray-text bold">03 </span>SPACE LAUNCH 101</h2>
                <div>
                    <h2 className="dark-gray-text">THE TERMINOLOGY...</h2>
                    <h1 className="white-text">{filteredTechnology[0].name.toUpperCase()}</h1>
                    <p className="light-blue-text">{filteredTechnology[0].description}</p>
                </div>
            </div>
            <img className="tech-img" src={`${filteredTechnology[0].images.portrait}`} alt={`${filteredTechnology[0]}`}/>
        </div>
        </main>

    )
}