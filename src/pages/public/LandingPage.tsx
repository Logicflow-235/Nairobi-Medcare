import heroimage from "../../assets/heroimage.jpg";
import heroimage1 from "../../assets/heroimage1.jpg";
import heroimage2 from "../../assets/heroimage2.jpg";
import heroimage3 from "../../assets/heroimage3.jpg";
import missionimage from "../../assets/missionimage.jpg"
import consoltation from "../../assets/consoltation.jpg"
import pediatrics from "../../assets/pediatrics.jpg";
import Gynecology from "../../assets/Gynecology.webp";
import radiology from "../../assets/radiology.jpg";
import pharmacy from "../../assets/pharmacy.jpg";
import Emergency from "../../assets/Emergency.jpg";
import optical from "../../assets/optical.webp";
import Laboratory from "../../assets/Laboratory.jpg";
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
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-blue-100">
        <div className="p-2">
         <img className="shadow-2xl shadow-blue-800/90 w-full rounded-2xl object-cover" src={missionimage} alt="Picture of our doctors"/>
        </div>
        <div className="font-[Popping] flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold ">Our Mission</h2>
          <p className="text-gray-900 font-[Popping] text-lg p-6">At Nairobi MedCare, we believe getting quality healthcare shouldn't mean long queues or endless phone calls. We connect you with trusted doctors across Nairobi in just a few clicks — so you can spend less time waiting and more time getting better.</p>
        </div>
       </div> 
       <div>
         <h2 className="text-3xl font-bold italic text-blue-600 text-center p-6">Medical Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={consoltation} alt="picture of doctor in consultation room"/>
              <div>
                 <h3>General Consultation</h3>
                 <p>Get professional medical advice from our experienced doctors.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={pediatrics} alt="picture of pediatricians"/>
              <div>
                 <h3>Pediatric Care</h3>
                 <p>Specialized healthcare for children and adolescents.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={Gynecology} alt="picture of gynecologists"/>
              <div>
                 <h3>Gynecology</h3>
                 <p>Specialized care for women's reproductive health.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={radiology} alt="picture of radiology equipment"/>
              <div>
                 <h3>Radiology</h3>
                 <p>Advanced imaging services for accurate diagnosis.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={pharmacy} alt="picture of our pharmacy"/>
              <div>
                 <h3>Pharmacy</h3>
                 <p>Access to a wide range of medications and healthcare products.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={Emergency} alt="picture of our emergency department"/>
              <div>
                 <h3>Emergency Care</h3>
                 <p>24/7 emergency services for critical medical situations.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={optical} alt="picture of our optical department"/>
              <div>
                 <h3>Optical Care</h3>
                 <p>Comprehensive eye care services for all ages.</p>
              </div>
           </div>
           <div className="flex flex-col rounded-3xl shadow-2xl shadow-blue-800/90 p-4 gap-2 bg-blue-100 ">
              <img className="w-full" src={Laboratory} alt="picture of laboratory science"/>
              <div>
                 <h3>Laboratory Science</h3>
                 <p>Advanced diagnostic testing for accurate medical insights.</p>
              </div>
           </div>
         </div>
       </div>
       
    </div>
)
}