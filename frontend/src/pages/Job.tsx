import Footer from "../components/Footer";
import JobCom from "../components/JobComponent";
import NavBar from "../components/Navbar";

export default function Job(){
     return(
          <div>
          <NavBar n="Rishit" />
          <div className="h-screen">
               <JobCom/>
          </div>
          <Footer /></div>
     )
}