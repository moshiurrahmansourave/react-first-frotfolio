import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="text-center my-40">
            <h3 className="text-2xl">!!Oops</h3>
            <h5 className="text-lg">Page is not founded</h5>
            <Link to="/"><button className=" text-2xl bg-fuchsia-500 p-3 rounded-lg">back to home</button></Link>
            
        </div>
    );
};

export default ErrorPage;