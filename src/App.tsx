import LandingPage from "./pages/public/LandingPage"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/footer"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/public/AboutPage"
import  ContactPage from "./pages/public/ContactPage"
export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}