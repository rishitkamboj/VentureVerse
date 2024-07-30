import Avatar2 from "./Avatar2";


export default function PeopleList()  {


     const people = [
          {
            name: 'Neil Sims',
            email: 'email@flowbite.com',
            type: 'Investor',
          },
          {
            name: 'Bonnie Green',
            email: 'email@flowbite.com',
           type: 'Start-up owner',
          },
          {
            name: 'Michael Gough',
            email: 'email@flowbite.com',
           type: 'User',
          },
          {
            name: 'Thomas Lean',
            email: 'email@flowbite.com',
           type: 'User',
          },
          {
            name: 'Lana Byrd',
            email: 'email@flowbite.com',
            type: 'User',
          },
        ];
   
     return (
          <div className="flex m-2">
       <ul className="max-w-md divide-y divide-gray-700">
         {people.map((person, index) => (
           <li key={index} className="py-3 sm:py-4">
             <div className="flex items-center space-x-4 rtl:space-x-reverse">
               <div className="flex-shrink-0">
                 <Avatar2   n={person.name[0]}/>
               </div>
               <div className="flex-1 min-w-0">
                 <p className="text-sm font-medium  truncate text-white">
                   {person.name}
                 </p>
                 
               </div>
               <div className="inline-flex items-center text-base font-semibold text-white">
                 {person.type}
               </div>
             </div>
           </li>
         ))}
       </ul>
       </div>
     )
   };