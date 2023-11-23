import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import PropTypes from "prop-types"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({changeTheme, mode}) => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
    }


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>


    </>


    return (
        <div className="fixed top-0 w-full z-10">
            <div className="navbar shadow-none text-white backdrop-blur-md ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 bg-opacity-80">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl gap-0 hidden lg:block font-thin ">Gadget<span className="text text-blue-800 font-bold">Galaxy</span></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div>
                        <button className="btn btn-sm lg:btn mx-2 bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-gray-800 dark:text-gray-300 border-none text-2xl" onClick={changeTheme}>{mode === "light" ? <MdOutlineDarkMode></MdOutlineDarkMode> : <MdOutlineLightMode></MdOutlineLightMode>}</button>
                    </div>
                    <div>
                        {
                            user ?
                                <div className="text-center justify-center items-center flex  text-xs lg:text-base btn btn-sm lg:btn mx-2 px-2 border-none rounded-lg bg-gray-300 dark:bg-gray-800  text-white lg:bg-opacity-50 lg:text-white font-semibold p-1">
                                    <div className="hidden lg:block">
                                        <p>{user.displayName}</p>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-5 lg:w-7 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        }
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-sm lg:btn border-none bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-gray-800 dark:text-gray-300">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn border-none  bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-gray-800 dark:text-gray-300">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    changeTheme: PropTypes.func,
    mode: PropTypes.string,
}

export default Navbar;