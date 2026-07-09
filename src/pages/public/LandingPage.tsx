import heroimage from "../../assets/heroimage.jpg";
import heroimage1 from "../../assets/heroimage1.jpg";
import heroimage2 from "../../assets/heroimage2.jpg";
import heroimage3 from "../../assets/heroimage3.jpg";
import missionimage from "../../assets/missionimage.jpg"
import { useEffect, useState } from "react";
export default function LandingPage () {
const images = [heroimage, heroimage1, heroimage2, heroimage3]
const [currentIndex, setCurrentIndex]= useState <number>(0);
useEffect( ()=>{
 const interval = setInterval(()=>{
    setCurrentIndex((prev)=>(prev+1)%images.length)
 },3000)
 return ()=>{clearInterval(interval)}
    },[])
return(
    <div>
       <div style= {{backgroundImage:`url(${images[currentIndex]})`}}className="relative h-screen bg-cover bg-center">
         <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative font-[Fredoka] flex flex-col items-center gap-4 justify-center h-screen">
           <h2 className="text-white font-heading font-bold text-3xl">Your Health, Simplified</h2>
          <p className="text-white text-lg">Find the right doctor, choose a time that works for you, and skip the waiting room stress.</p>
          <button className="p-4 bg-blue-500 text-white text-2xl text-bold rounded-lg hover:bg-blue-700">Get Started</button>
        </div>
        </div>  
       <div className="grid grid-cols-2 bg-blue-100">
        <img className="shadow-md w-full rounded-2xl object-cover border-2 border-blue-600" src={missionimage} alt="Picture of our doctors"/>
        <div className="font-[Popping] flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl text-bold ">Our Mission</h2>
          <p className="text-gray-900font-[Popping] text-lg p-6">At Nairobi MedCare, we believe getting quality healthcare shouldn't mean long queues or endless phone calls. We connect you with trusted doctors across Nairobi in just a few clicks — so you can spend less time waiting and more time getting better.</p>
        </div>
       </div> 
    </div>
)
}