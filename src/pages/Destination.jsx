import { NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"
//the default page for destinations is the Moon 
export default function Destination(){

const [searchParams] = useSearchParams()

const destinationFilter = searchParams.get("destination") || "moon"

const destinationsData = data.destinations

const filteredDestination = destinationsData.filter(destination=>{
    return destinationFilter === destination.name.toLowerCase()})

//fix the active links
const activeLink={
    color: "#FFFFFF"
}
    return (
        <div className="destination-div">
            <h2 className="dark-gray-text">01 <span className="white-text">PICK YOUR DESTINATION</span></h2>
            <div className="destination-content-div">
                <img src={`${destinationFilter? filteredDestination[0].images.png: null}`}/>
                <div className="destination-details-div">
                    <nav className="destination-nav">
                        <NavLink to="?destination=moon" style={({isActive})=>isActive? activeLink: null} className="light-blue-text">MOON</NavLink>
                        <NavLink to="?destination=mars" style={({isActive})=>isActive? activeLink: null} className="light-blue-text">MARS</NavLink>
                        <NavLink to="?destination=europa" style={({isActive})=>isActive? activeLink: null} className="light-blue-text">EUROPA</NavLink>
                        <NavLink to="?destination=titan" style={({isActive})=>isActive? activeLink: null} className="light-blue-text">TITAN</NavLink>
                    </nav>
                    <h1 className="white-text">{destinationFilter? filteredDestination[0].name.toUpperCase(): null}</h1>
                    <p className="light-blue-text">{destinationFilter? filteredDestination[0].description: null}</p>
                    <hr></hr>
                    <div className="destination-distance-traveltime-div">
                    <div>
                        <p className="light-blue-text">AVG. DISTANCE</p>
                        <p className="white-text">{destinationFilter? filteredDestination[0].distance.toUpperCase(): null}</p>
                    </div>
                    <div>
                        <p className="light-blue-text">EST. TRAVEL TIME</p>
                        <p className="white-text"> {destinationFilter? filteredDestination[0].travel.toUpperCase(): null}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}