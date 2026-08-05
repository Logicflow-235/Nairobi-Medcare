import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="bg-white p-6 text-blue-700 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex flex-col gap-2 font-serif italic">
                <h1 className="font-extrabold">Nairobi MedCare</h1>
                <h3 className="font-medium">We Care About your Health</h3>
            </div>
            <nav className="flex gap-8 text-lg font-medium">
                <NavLink className={({isActive})=>isActive ? "text-black": "text-blue-700 hover:text-blue-400"} to="/">Home</NavLink>
                <NavLink className= {({isActive})=> isActive ?"text-black": "text-blue-700 hover:text-blue-400"} to="/about">About</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-black" :"text-blue-700 hover:text-blue-400"} to="/contact">Contact</NavLink>
            </nav>
            </div>
        </div>
    )
}