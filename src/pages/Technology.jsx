import { Link, useSearchParams } from "react-router-dom"
import data from "../data.json"
export default function Technology(){
    const [searchParams] = useSearchParams()
  
    const technologyFilter = searchParams.get("technology") || "launchvehicle"
    const technologyData = data.technology
    console.log(technologyData)
    const filteredTechnology = technologyData.filter(function(tech){
        return technologyFilter === tech.name.replace(/\s+/g, "").toLowerCase() 
    })
    console.log(filteredTechnology)
    //There is an issue with the filtering of "Space capsule"
    return (
        <div className = "tech-div">
            <p>03 Space Launch 101</p>
            <div className="tech-nav">
                <Link to="?technology=launchvehicle" className="tech-link">1</Link>
                <Link to="?technology=spaceport" className="tech-link">2</Link>
                <Link to="?technology=spacecapsule" className="tech-link">3</Link>
            </div>
            <div>
                <h2 className="dark-gray-text">THE TERMINOLOGY...</h2>
                <h1 className="white-text">{filteredTechnology[0].name.toUpperCase()}</h1>
                <p className="light-blue-text">{filteredTechnology[0].description}</p>
            </div>
            <img src={`${filteredTechnology[0].images.portrait}`}/>
        </div>
    )
}