import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/m5yL04y/modern-stationary-collection-arrangement.jpg')] overflow-hidden">
                <div className="fixed top-0 w-full"><Navbar></Navbar></div>
                <div className="hero-content text-center text-neutral-content " >
                <div className="bg-transparent backdrop-blur-md w-1/2 absolute right-0"></div>
                    <div className="max-w-md text-right absolute right-28">
                        <h1 className="mb-5 text-5xl font-bold text-white ">Welcome To Gadget Galaxy</h1>
                        <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login">
                        <button className="btn btn-primary bg-blue-500 border-none hover:bg-blue-700">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;