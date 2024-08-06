import  { useEffect } from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ProfileCard from '../components/IndividualCard';

export default function Home() {
   
     // const name = localStorage.getItem('name');
     // const token = localStorage.getItem('token');
     // const navigate = useNavigate();

     // useEffect(() => {
     //     if (!name || !token) {
     //         alert("You are not signed in");
     //         navigate("/signin");
     //     }
     // }, [name, token, navigate]);

     // if (!name || !token) {
     //    navigate("/signin");
     // }

     return (
         <div>
             <NavBar n="Rishit" />
             <div className="min-h-screen"></div>
             <Footer />
         </div>
     );
}
