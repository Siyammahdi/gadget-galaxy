import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {

    AOS.init({
        duration: 800
      });

    
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state? location.state : "/")
            toast('Logged in successfully')   
        })
        .catch(error => {
            console.error(error);
        })
    }

    
    
    
    return (  
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/qgLmJKp/blue-smooth-wall-textured-background.jpg')] ">
            <div className="fixed top-0 w-full"><Navbar></Navbar></div>
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-28 gap-20">
                    <div className="text-center lg:text-left text-white">
                        <h1 data-aos="fade-down" className="text-5xl font-bold">Login now!</h1>
                        <p data-aos="fade-up" className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-black shadow-2xl  backdrop-blur-md">
                        <form onSubmit={handleLogin} className="card-body">
                            <div data-aos="fade-down" className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-white bg-opacity-10" required />
                            </div>
                            <div data-aos="fade-down" className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white bg-opacity-10" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control mt-6 gap-5">
                                <button className="btn btn-primary bg-blue-600">Login</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Dont have an account? please <Link className="font-bold text-blue-700" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;