import {BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import DestLayout from "./components/DestLayout.jsx"
import Home from "./pages/Home.jsx"
import Destination from "./pages/Destination.jsx"
import Moon from "./pages/Moon.jsx"
import Crew from "./pages/Crew.jsx"
import Technology from "./pages/Technology.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
    
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/destination" element={<DestLayout/>}>
              <Route index element={<Destination/>}/>
              <Route path="/destination/:planet" element={<Moon/>}/>
           
            </Route>
            <Route path="/crew" element={<Crew/>}>
              <Route path="/crew/:member" element={""}/>
            </Route>
            <Route path="/technology" element={<Technology/>}/>
    
        </Route>
      </Routes>
    </BrowserRouter>
   
     
        
    
  )
}

export default App
