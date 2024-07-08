import Footer from "../components/Footer";
import JobCom from "../components/JobComponent";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Job(){
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

     return(
          <div>
          <NavBar n="Rishit" />
          <div className="h-screen">
               <JobCom/>
          </div>
          <Footer /></div>
     )
}