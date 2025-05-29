import { useState } from "react";

export default function Inicio(){

    const [user, setUser] = useState(false);
    
    return(        
    <div className="bg-[#273240] relative h-screen w-screen flex flex-row items-center justify-around p-0 m-0 overflow-hidden">
        <div className="flex flex-col min-w-1/6  text-white text-4xl">
            <div>
                <div>
                    {   user?
                        <img src="" alt="" />:
                        <div className="rounded-full border-white border-2 w-[80px] h-[80px] flex items-center justify-center">
                                <i class="fa-solid fa-user"></i>
                        </div>
                        
                    }
                </div>
                <div className="text-xl">
                    <i class="fa-solid fa-lightbulb"></i>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
            <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        </div>
        <div className="bg-white min-w-screen md:min-w-4/6 min-h-[90vh] rounded-4xl">

        </div>
    </div>
);

}