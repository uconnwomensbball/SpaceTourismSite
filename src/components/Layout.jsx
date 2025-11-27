import { Outlet } from "react-router-dom"
import MainNavBar from "./MainNavBar.jsx"
import Footer from "./Footer.jsx"

export default function Layout(){
    return (
    <>
        <MainNavBar/>
        <Outlet/>
        <Footer/>
    </>
    )
}