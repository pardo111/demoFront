import React, { useState } from "react";
import login from "../assets/login.svg";


export default function InicioSesion() {
    function handleOnChange() {

    }

    return (
        
             <section className="bg-[#273240] relative h-screen w-screen flex flex-col items-center justify-center p-0 m-0 overflow-hidden">
            <div className="absolute bg-[#404852] min-h-[1000px] min-w-[1000px] rounded-[120px] rotate-45 z-0 -top-70 -left-50"></div>
            <div className="absolute bg-[#404852] min-h-[1000px] min-w-[1000px] rounded-[120px] rotate-45 z-0 -bottom-60 -right-40"></div>

            <div className="flex flex-row z-1">
                <div className="lg:w-1/2 w-full rounded-2xl bg-[rgba(0,0,0,0.50)]">

                    <form method="post" onChange={handleOnChange}>

                    </form>
                </div>
                <div className="hidden lg:block lg:w-1/2 items-center ">
                    <img src={login} alt="" className="min-h-[800px] min-w-[800px]" />
                </div>
            </div>
        </section>
        );
}