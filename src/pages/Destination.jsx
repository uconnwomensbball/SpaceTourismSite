import { Link, NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"
//the default page for destinations is the Moon 
export default function Destination(){

const [searchParams] = useSearchParams()
const destinationFilter = searchParams.get("destination")
console.log("destinationFilter", destinationFilter)
const destinationsData = data.destinations
console.log("destinationsData", destinationsData)
const filteredDestination = destinationsData.filter(destination=>{
    console.log("destination", destination)
    return destination.name.toLowerCase() === destinationFilter})
console.log("filteredDestination", filteredDestination)
//fix the active links
const activeLink={
    color: "#D0D6F9"
}
    return (
        <div className="destination-div">
            <h2>01 <span className="white-text">PICK YOUR DESTINATION</span></h2>
            <nav className="destination-nav">
                <NavLink to="?destination=moon" style={({isActive})=>isActive? activeLink: null} className="light-blue-text">MOON</NavLink>
                <NavLink to="?destination=mars">MARS</NavLink>
                <NavLink to="/destination/europa">EUROPA</NavLink>
                <NavLink to="/destination/titan">TITAN</NavLink>
            </nav>
            <h2>MOON</h2>
            <p>To be filled in...</p>
            <div>
                <p>AVG. DISTANCE</p>
                <p>EST. TRAVEL TIME</p>
            </div>
        </div>
       
    )
}