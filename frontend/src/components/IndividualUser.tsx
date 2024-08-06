import ProfileCard from "./IndividualCard";

interface Individual {
     id: number;
     email: string;
     type: string;
   }
   
   export default function Indjob({ id, email, type }: Individual) {
     return (
       <div >
       <ProfileCard name={email} role={type} />
       </div>
     );
   }
   