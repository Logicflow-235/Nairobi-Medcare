import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="bg-white p-6 text-blue-700 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="flex flex-col gap-2 font-serif italic">
                <h1 className="font-extrabold">Nairobi MedCare</h1>
                <h3 className="font-medium">We Care About your Health</h3>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
        </div>
    )
}