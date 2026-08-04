import LandingPage from "./pages/public/LandingPage"
import Navbar from "./components/layout/Navbar"
import { Routes, Route } from "react-router-dom"
export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}