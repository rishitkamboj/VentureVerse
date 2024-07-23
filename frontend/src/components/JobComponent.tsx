import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";


interface JobProp{
        id:Number,
     title:string,
        description:string,
        location:string,
        userId:Number,
        contact:Number
}

export default function JobCom() {
  const [job, setJob] = useState<JobProp[]>([]);
//  job.push("Software Developer");

job.push({id:1,title:"Software Developer",description:"We are looking for a software developer",location:"Bangalore",userId:1,contact:1234567890});
  const router= useNavigate();


  // useEffect(() => {
   
  //    fetch("http://localhost:5000/api/jobs")
  //      .then((res) => res.json())
  //      .then((data) => {
  //         setJob(data);
  //      });
  // }, []);

  return (
    <div>
      <div className="">
        <div className="flex justify-center text-white text-2xl font-bold items-center gap-4">
         <div>Publish a job </div> 
           <ModalComponent/>
         </div>
 
      </div>
      <div className="mt-4 flex justify-center text-white text-xl font-bold">Jobs Posted:-</div>

      <ul className="m-4 text-sm font-medium border border-gray-200 rounded-lg bg-gray-700 border-gray-600 text-white">
  {job.map((j, index) => (
    <li
      key={index}
      onClick={() => {
        console.log(j.id);
        router(`/job/${j.id}`);
      }}
      className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="text-xl font-bold">{j.title}</div>
      <div>{j.description}</div>
      <div>{j.location}</div>
      <div>{String(j.contact)}</div>
    </li>
  ))}
</ul>

    </div>
  );
}
