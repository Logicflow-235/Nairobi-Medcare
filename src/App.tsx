import LandingPage from "./pages/public/LandingPage"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/footer"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/public/AboutPage"
export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}