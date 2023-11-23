import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen dark:bg-[url('https://i.ibb.co/VgHdp2V/Untitled.jpg')] bg-[url('https://i.ibb.co/HFbzVvh/modern-stationary-collection-arrangement.jpg')] overflow-hidden">
                <div className="hero-content text-center text-neutral-content " >
                <div className="bg-transparent backdrop-blur-md w-1/2 absolute right-0"></div>
                    <div className="max-w-md lg:text-right lg:absolute lg:right-28">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-white ">Welcome To Gadget Galaxy</h1>
                        <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login">
                        <button className="btn border-none bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-gray-800 dark:text-gray-300">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;