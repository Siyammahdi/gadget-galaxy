import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { BsGoogle } from 'react-icons/Bs';
import app from '../../../firebase.config';




const Register = () => {

    AOS.init({
        duration: 800
      });

      const {createUser} = useContext(AuthContext)
    

      const [regError, setRegError] = useState('')
      const [success, setSuccess] = useState('')
      const [user, setUser] = useState()


      const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);
        

        setRegError('')
        setSuccess('')

        if(password.length < 6){
            setRegError('Password must be in at least 6 characters')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setRegError('Password must have at least a uppercase letter')
            return
        }


        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast("User Registered Successfully")
            form.reset()
        })
        .catch(error => {
            setRegError(error.message)
        })
    }

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            setUser(user);
            toast("User Registered in Successfully")
        })
        .catch(error => console.error(error));
    }

    console.log(user);
    


    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/qgLmJKp/blue-smooth-wall-textured-background.jpg')]">
            <div className="fixed top-0 w-full"><Navbar></Navbar></div>
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-28 gap-20">
                    <div className="text-center lg:text-left text-white">
                        <h1 data-aos="fade-down" className="text-5xl font-bold">Register now!</h1>
                        <p data-aos="fade-up" className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-black shadow-2xl  backdrop-blur-md">
                        <form onSubmit={handleRegister} className="card-body">
                            <div data-aos="fade-down" className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span> 
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered bg-white bg-opacity-10" required />
                            </div>
                            <div data-aos="fade-down" className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered bg-white bg-opacity-10" required />
                            </div>
                            <div data-aos="fade-down" className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-white bg-opacity-10" required />
                            </div>
                            <div className="form-control mt-6 gap-5">
                                <button className="btn btn-primary bg-blue-600">Register</button>
                                <button onClick={() => googleSignIn()} className="btn p-2 "><BsGoogle></BsGoogle> Google</button>
                                
                            </div>
                            <div>
                                {
                                    regError && <p className='text-red-600'>{regError}</p>
                                }
                                {
                                    success && <p className='text-green-600'>{success}</p>
                                }
                            </div>
                        </form>
                        <p className="text-center pb-5">Already have an account? please <Link className="font-bold text-blue-700" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;