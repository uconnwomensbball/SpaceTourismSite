import { Outlet } from "react-router-dom"
import MainNavBar from "./MainNavBar"
import DestNavBar from "./DestNavBar"

export default function DestLayout(){
    return (
        <>
            <h1>01 Pick your destination</h1>
            <DestNavBar/>
            <Outlet/>
        </>
    )
}