import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";

interface JobProp {
  id: number;
  title: string;
  description: string;
  location: string;
  userId: number;
  contact: number;
}

export default function Individual() {
  const { id } = useParams();
  const [job, setJob] = useState<JobProp>();
  const [user,setUser]=useState();

  useEffect(() => {
    setJob({
      id: 1,
      title: "Software Developer",
      description: "We are looking for a software developer",
      location: "Bangalore",
      userId: 1,
      contact: 1234567890,
    });
  

   // const fetchJob = async () => {
     //       try {
     //          const response = await axios.get(`http://localhost:5000/api/info/${job.userId}`);
     //          setJob(response.data);
     //       } catch (error) {
     //          console.error("Error fetching job data:", error);
     //       }


  }, [id]);

  // useEffect(() => {
  //    const fetchJob = async () => {
  //       try {
  //          const response = await axios.get(`http://localhost:5000/api/getid/${id}`);
  //          setJob(response.data);
  //       } catch (error) {
  //          console.error("Error fetching job data:", error);
  //       }
  //    };

  //    fetchJob();
  // }, [id]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {job ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
               
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
              {job.title} job
            </span>{" "}
            in {job.location}
          </h1>
          <p className="text-lg font-normal lg:text-xl text-gray-700 mb-2">
            {job.description}
          </p>
          <p className="text-lg font-normal lg:text-md text-gray-700 mb-2">
            Contact: {String(job.contact)}
          </p>
          <p className="text-lg font-normal lg:text-md text-gray-700">
            Posted by: {user}
          </p>
        </div>
      ) : (
          <Spinner/>
      )}
    </div>
  );
}
