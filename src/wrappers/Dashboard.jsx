import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    const revisarLlaves = ()=>{

        console.log(user)
    };

     useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        if (!token || !username) {
            navigate("/Inicio_sesion");
        } else {
            setUser(username);
        }
    }, [navigate]);
    return (

<div className="bg-[#273240] min-h-screen w-screen flex flex-row items-start justify-start m-0 overflow-hidden">

            {/* --- MENÚ LATERAL FIJO --- */}
            <div className="fixed top-0 left-0 h-screen w-[70px] md:w-[180px] 
                            bg-[#273240] text-white text-4xl flex flex-col 
                            items-center justify-between py-6 md:py-12 z-50">

                {/* Usuario e iconos */}
                <div className="flex flex-col items-center gap-6">
                    {user ? (
                        <img src="" alt="avatar" className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full border-2 border-white" />
                    ) : (
                        <div className="rounded-full border-white border-2 w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex items-center justify-center">
                            <i className="fa-solid fa-user md:text-4xl text-[20px]"></i>
                        </div>
                    )}
                    <h1 className="hidden md:block text-lg">{user}</h1>
                </div>

                {/* --- Navbar --- */}
                <div className="flex-1 mt-8 overflow-y-auto">
                    <Navbar />
                </div>

                {/* Iconos inferiores */}
                <div className="flex flex-col items-center gap-4 text-lg mt-8">
                    <i className="fa-solid fa-sun"></i>
                    <i
                        className="fa-solid fa-right-from-bracket hover:cursor-pointer"
                        onClick={() =>{ 
                            navigate("/Inicio_sesion")
                            setUser({user:"", token:""});
                            localStorage.removeItem('username');
                            localStorage.removeItem('token');
                        }}
                    ></i>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="bg-white flex-1 ml-[70px] md:ml-[180px] min-h-screen rounded-none md:rounded-l-3xl p-4 shadow-lg overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}
