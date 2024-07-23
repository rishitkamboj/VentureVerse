import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Individual from "../components/Individual";


export default function JobIndividual() {
  
return (
   <div>
   <NavBar n="Rishit" />
   <div className="h-screen">
        <Individual/>
   </div>
   <Footer /></div>
)


}
