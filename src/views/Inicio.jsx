import { useState } from "react";

export default function Inicio() {

    const [user, setUser] = useState(false);
    const userName = 'user name', userEmail = 'mail@mail.com';

    return (
        <div className="bg-[#273240] relative h-screen w-screen flex flex-row items-center justify-around p-0 m-0 overflow-hidden">
            <div className="flex flex-col min-w-1/6  text-white text-4xl">
                <div className="">
                    <div>
                        <div>
                            {user ?
                                <img src="" alt="" /> :
                                <div className="rounded-full border-white border-2 w-[80px] h-[80px] flex items-center justify-center">
                                    <i className="fa-solid fa-user"></i>
                                </div>

                            }
                        </div>
                        <div >
                            <h1  >
                                {userName}
                            </h1>
                            <p className="text-lg opacity-50">
                                {userEmail}
                            </p>
                        </div>

                    </div>
                    <div className="text-lg flex gap-4 py-4">
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                </div>
                <nav>
                    <ul className="text-xl">
                        <li> <i className="fa-solid fa-house"></i> Inicio  </li>
                        <li> <i className="fa-solid fa-users"></i> Administrar Usuarios</li>
                        <li>  <i className="fa-solid fa-paperclip"></i> Reportes</li>
                        <li>
                            <div className="rounded-full border-white border-2 min-w-[40px] min-h-[40px]   items-center justify-center inline">
                                <i className="fa-solid fa-user"></i>
                            </div>Cuenta
                        </li>
                        <li><i className="fa-solid fa-wrench"></i> Configuracion</li>
                    </ul>
                </nav>
            </div>
            <div className="bg-white min-w-screen md:min-w-4/6 min-h-[90vh] rounded-4xl">

            </div>
        </div>
    );

}