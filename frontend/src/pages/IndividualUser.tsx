import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Indjob from "../components/IndividualUser";
import Spinner from "../components/Spinner";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

type User = {
    id: number;
    name: string;
    email: string;
    type: string;
};


export default function UserIndividual() {
    const { u_id } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
    
        const fetchUser = async () => {
            const userData: User = {
                id: 1,
                name: 'Bonnie Green',
                email: 'email@flowbite.com',
                type: 'Start-up owner',
            };
            setUser(userData);
        };

        fetchUser();
    }, [u_id]);

    if (!user) {
        return <div>
           



<NavBar n="Rishit" />
<div className="min-h-screen">
<Spinner/>
</div>
<Footer />
</div>;
    }

    return (
        <div>
        <NavBar n="Rishit" />
        <div className="min-h-screen ml-10">
        <Indjob id={user.id} email={user.email} type={user.type} />   
        </div>
        <Footer />
        </div>
    );
}
