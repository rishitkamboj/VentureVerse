import Footer from "../components/Footer";
import NavBar from "../components/Navbar";



export default function Community(){

     return (
          <div>
          <NavBar n="Rishit" />
          <div className="min-h-screen">
               <div className="flex gap-2 justify-around  ">
                <div>
                    <div>Investors</div>
                    
                    </div>
                <div>Start-up owners</div>
                <div>Users</div>
</div>

          </div>
          <Footer />
      </div>
     )
}