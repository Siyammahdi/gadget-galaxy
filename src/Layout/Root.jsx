import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";

const Root = () => {

    const [mode, setMode] = useState("light")
    const html = document.documentElement

    const changeTheme = () => {
        if(mode == "light"){
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
        }
        else{
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
        }
    }

    return (
        <div className={ mode === "dark" ? `bg-gradient-to-r from-blue-950 to-blue-800` : `bg-gradient-to-r from-blue-400 to-blue-200 `}>
            <Navbar changeTheme={changeTheme} mode={mode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

//bg-gradient-to-r from-blue-400 to-blue-200 