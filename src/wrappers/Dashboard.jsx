import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="bg-[#273240] relative min-h-screen w-screen flex items-start justify-around md:py-12 px-0 m-0">
            <div className=" flex flex-col min-w-1/9 items-center text-white text-4xl md:gap-24  ">
                <div className="flex-col  items-around  items-center h-[8-vh] ">
                    <div>
                        <div className="">
                            {user ?
                                <img src="" alt="" /> :
                                <div className="rounded-full border-white border-2 w-[30px] h-[30px] md:w-[80px] md:h-[80px] flex items-center justify-center">
                                    <i className="fa-solid fa-user md:text-4xl text-[20px]"></i>
                                </div>

                            }
                        </div>
                        <div className="hidden md:block">
                            <h1  >
                                {userName}
                            </h1>
                        </div>

                    </div>
                    <div className="text-lg items-center gap-4 py-4 flex flex-col md:flex-row">
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-right-from-bracket hover:cursor-pointer " onClick={() => { navigate('/Inicio_sesion') }}></i>
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="bg-white w-full md:w-4/6 min-h-[90vh] md:rounded-3xl p-4 shadow-lg overflow-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );

}