import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);


    const handleApplyJob = ()=>{
        saveJobApplication(idInt)
        toast('You have applied succesfuly')
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl"> details coming hare</h2>
                    <p className="text-2xl">{job.company_name}</p>
                    <h2 className="text-lg">Job Details of: {job.job_title} </h2>
                </div>
                <div className="border text-center">
                    <h2 className="text-2xl"> side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary">APPLY NOW</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;