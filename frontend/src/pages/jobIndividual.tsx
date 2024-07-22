import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JobIndividual() {
   const { id } = useParams();
   const [job, setJob] = useState(null);

   useEffect(() => {
      const fetchJob = async () => {
         try {
            const response = await axios.get(`http://localhost:5000/api/getid/${id}`);
            setJob(response.data);
         } catch (error) {
            console.error("Error fetching job data:", error);
         }
      };

      fetchJob();
   }, [id]);

   return (
      <div>
         {job ? (
            <div>
             
            </div>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
}
