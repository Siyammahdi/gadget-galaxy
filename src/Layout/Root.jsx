import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-200  dark:bg-gradient-to-r from-blue-950 to-blue-800 ...">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;