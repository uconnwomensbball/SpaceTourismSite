import { Link, useSearchParams } from "react-router-dom"
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
    return (
        <div className="destination-div">
            <h1>01 Pick your destination</h1>
            <nav className="destination-nav">
                <Link to="?destination=moon">Moon</Link>
                <Link to="?destination=mars">Mars</Link>
                <Link to="/destination/europa">Europa</Link>
                <Link to="/destination/titan">Titan</Link>
            </nav>
        </div>
       
    )
}