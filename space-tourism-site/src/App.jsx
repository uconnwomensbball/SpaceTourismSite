import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


import Home from "./pages/Home.jsx"
import Destination from "./pages/Destination.jsx"
import Crew from "./pages/Crew.jsx"
import Technology from "./pages/Technology.jsx"

function App() {


  return (
    <BrowserRouter>
    <Link to="/">00 Home</Link>
    <Link to="/destination">01 Destination</Link>
    <Link to="/crew">02 Crew</Link>
    <Link to="/technology">03 Technology</Link>
      <Routes>
        <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
        </Route>
      </Routes>
          <footer>JDJD Codes</footer>
    </BrowserRouter>
   
     
        
    
  )
}

export default App
