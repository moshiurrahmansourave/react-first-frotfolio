import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="mr-4 px-5 py-2 border border-[#7E90FE] rounded font-extrabold">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border border-[#7E90FE] rounded font-extrabold">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <h3 className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h3>
                    <h3 className="flex items-center"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle> {salary}</h3>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/ ${id} `}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;