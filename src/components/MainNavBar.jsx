import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

   //TODO: add accessibility to hamburger icon //
export default function MainNavBar(){
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    )

    const [isMobileNavBarDisplayed, setIsMobileNavBarDisplayed] = useState(false)

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener("resize", handleResize)
      
    }, [])
    
    function displayNavBar(){
        console.log("navbar displayed!")
        setIsMobileNavBarDisplayed(prevVal=>!prevVal)
    }

    function closeMobileNavBar(){
        setIsMobileNavBarDisplayed(false)
    }

    const mobileMenuRef = useRef(null)

useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileNavBarDisplayed(false)
      }
    }

    if (isMobileNavBarDisplayed) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileNavBarDisplayed])



    return (
        
        <div className="main-nav-bar-div">
            <img src="./logo.svg" alt=""/>
            {isMobile && !isMobileNavBarDisplayed? <img className="hamburger-icon" onClick={displayNavBar} src="./icon-hamburger.svg"/>: null}
         
            <div className="main-nav-bar-line"></div>
            {isMobileNavBarDisplayed || !isMobile?
            <div className="main-nav-bar-links-div" ref={mobileMenuRef}>
             {isMobile && isMobileNavBarDisplayed? <img className = "close-mobile-navbar-btn" src="./icon-close.svg" onClick={closeMobileNavBar}/>: null}
                <NavLink
                    to="/"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}
                    onClick={closeMobileNavBar}><span className="bold">00</span> HOME</NavLink>
                <NavLink 
                    to="/destination?destination=moon"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}
                    onClick={closeMobileNavBar}><span className="bold">01</span> DESTINATION</NavLink>
                <NavLink 
                    to="/crew?name=hurley"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}
                    onClick={closeMobileNavBar}><span className="bold">02</span> CREW</NavLink>
                <NavLink  
                    to="/technology?technology=launchvehicle"
                    className={({isActive}) => `main-nav-bar-links main-nav-bar-links-hover ${isActive? "main-nav-bar-links-active": null}`}
                    onClick={closeMobileNavBar}><span className="bold">03</span> TECHNOLOGY</NavLink>
                    
            </div>:null}
             
        </div>
       
    )
}