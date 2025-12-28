import { NavLink, useSearchParams } from "react-router-dom"
import data from "../data.json"

export default function Destination(){
const [searchParams] = useSearchParams()
const destinationFilter = searchParams.get("destination") || "moon"
const destinationsData = data.destinations
const filteredDestination = destinationsData.filter(destination=>{
    return destinationFilter === destination.name.toLowerCase()})

    return (
        <div className="destination-div">
            <div className="destination-content-div">
                <div>
                    <h2 className="dark-gray-text">01 <span className="white-text">PICK YOUR DESTINATION</span></h2>
                    <img className="destination-img" src={`${destinationFilter? filteredDestination[0].images.png: null}`} alt={`${filteredDestination[0].name}`}/>
                </div>
                <div className="destination-details-div">
                    <nav className="destination-nav">
                        <NavLink 
                            to="?destination=moon"
                            className={`destination-nav-links ${destinationFilter === "moon" ? "destination-nav-links-active" : null}`}>MOON</NavLink>
                        <NavLink 
                            to="?destination=mars"
                            className={`destination-nav-links ${destinationFilter === "mars" ? "destination-nav-links-active" : null}`}>MARS</NavLink>
                        <NavLink
                            to="?destination=europa"
                            className={`destination-nav-links ${destinationFilter === "europa" ? "destination-nav-links-active" : null}`}>EUROPA</NavLink>
                        <NavLink 
                            to="?destination=titan"
                            className={`destination-nav-links ${destinationFilter === "titan" ? "destination-nav-links-active" : ""}`}>TITAN</NavLink>
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