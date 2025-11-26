import { Link } from "react-router-dom"

export default function DestNavBar(){
    return (
        <>
            <Link to="/destination/moon">Moon</Link>
            <Link to="/destination/mars">Mars</Link>
            <Link to="/destination/europa">Europa</Link>
            <Link to="/destination/titan">Titan</Link>
        </>

    )
}