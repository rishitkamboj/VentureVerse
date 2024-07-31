interface Individual {
     id: number;
     email: string;
     type: string;
   }
   
   export default function Indjob({ id, email, type }: Individual) {
     return (
       <div>
         {id}
       </div>
     );
   }
   