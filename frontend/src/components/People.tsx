import Avatar2 from "./Avatar2";
import { useNavigate } from "react-router-dom";
import Indjob from "./IndividualUser";

export default function PeopleList() {
  const router= useNavigate();

  const people = [
  
    { id:1,
      name: 'Bonnie Green',
      email: 'email@flowbite.com',
      type: 'Start-up owner',
    },
    {id:1,
      name: 'Michael Gough',
      email: 'email@flowbite.com',
      type: 'User',
    },
    { id:1,
      name: 'Thomas Lean',
      email: 'email@flowbite.com',
      type: 'User',
    },
    { id:1,
      name: 'Lana Byrd',
      email: 'email@flowbite.com',
      type: 'User',
    },
    { id:1,
      name: 'Neil Sims',
      email: 'email@flowbite.com',
      type: 'Investor',
    },
    { id:1,
      name: 'Bonnie Green',
      email: 'email@flowbite.com',
      type: 'Start-up owner',
    },
    {id:1,
      name: 'Michael Gough',
      email: 'email@flowbite.com',
      type: 'User',
    },
    { id:1,
      name: 'Thomas Lean',
      email: 'email@flowbite.com',
      type: 'User',
    },
    { id:1,
      name: 'Lana Byrd',
      email: 'email@flowbite.com',
      type: 'User',
    },
  ];

  return (
    <div >
        <span className="ml-4 bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent font-bold">Available Users: {people.length}</span>
    <div className="flex flex-wrap">
      {people.map((person, index) => (
        <div onClick={()=>{
          router("user/"+person.id);
        


        }} key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <Avatar2 n={person.name[0]} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-white">
                  {person.name}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                {person.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
