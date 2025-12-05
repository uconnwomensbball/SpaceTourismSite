import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layouts 
import Layout from "./components/Layout.jsx"
import DestLayout from "./components/DestLayout.jsx"
import CrewLayout from "./components/CrewLayout.jsx"
import TechLayout from "./components/TechLayout.jsx"

//Pages
import Home from "./pages/Home.jsx"
import Destination from "./pages/Destination.jsx"
import Crew from "./pages/Crew.jsx"
import Technology from "./pages/Technology.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
    
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route element={<DestLayout/>}>
              <Route path="destination" element={<Destination/>}/>
            </Route>
            <Route element={<CrewLayout/>}>
              <Route path="crew" element={<Crew/>}/>
            </Route>
            <Route element={<TechLayout/>}>
              <Route path="technology" element={<Technology/>}/>
            </Route>
    
        </Route>
      </Routes>
    </BrowserRouter>
   
     
        
    
  )
}

export default App
