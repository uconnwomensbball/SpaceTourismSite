import { Link, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Crew(){
    const [searchParams] = useSearchParams()
    const crewFilter = searchParams.get("name") || "hurley"
    const crewData = data.crew
    console.log("crewData", crewData)
    const filteredCrew = crewData.filter(member=>{
        console.log("member", member)
        return crewFilter === member.name})
   console.log("filteredCrew", filteredCrew)

//T2D - Need to fix filtration logic to return the filteredCrew member

    return (
        <div className="crew-div">
            <p>02 Meet your crew</p>
            <nav className = "crew-nav">
                <Link to="?name=hurley" className="crew-link"></Link>
                <Link to="?name=shuttleworth" className="crew-link"></Link>
                <Link to="?name=glover" className="crew-link"></Link>
                <Link to="?name=ansari" className="crew-link"></Link>
            </nav>
            <h2></h2>
        </div>
    )
}