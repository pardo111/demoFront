import In from "@/components/In";
import login from "@/assets/login.svg";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import api from "@/services/api";

export default function Inicio_sesion() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [isSubmit, setIsSubmit] = useState(false);
    function handleOnChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    async function sendData(e) {
        e.preventDefault();
        setIsSubmit(true);

        try {

            console.log(data);
            const response = await api.post("/auth/login", data);
            console.log(response.status);
            console.log(response);
            if (response.status===200) {
                navigate('/Dashboard');

                Toastify({
                    text: "Has iniciado sesion",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    style: {
                        background: "linear-gradient(to right, #a8e063, #56ab2f)", // gradiente verde claro
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: "bold"
                    }
                }).showToast();
            } else if (response.status===203) {

                Swal.fire({
                    title: "credenciales incorrectas",
                    text: "favor revisar credenciales esten bien",
                    icon: "error"
                });
            } else if (response.status >= 500) {
                Swal.fire({
                    title: "error fuera de servicio",
                    text: "error en la app",
                    icon: "error"
                });
            }
            setIsSubmit(false);
        } catch (error) {
            setIsSubmit(false);
                Swal.fire({
                    title: "error fuera de servicio",
                    text: "error en la app",
                    icon: "error, vuelve a intentarlo mas tarde"
                });
        }





    }

    return (

        <section className="bg-[#273240] relative h-screen w-screen flex flex-col items-center justify-center p-0 m-0 overflow-hidden">
            <div className="absolute bg-[#404852] min-h-[700px] min-w-[1000px] rounded-[160px] rotate-45 z-0 -top-70 -left-80"></div>
            <div className="absolute bg-[#404852] min-h-[700px] min-w-[1000px] rounded-[160px] rotate-45 z-0 -bottom-60 -right-70"></div>

            <div className="flex flex-row z-1 w-4/5 h-4/5">
                <div className="lg:w-1/2 w-full rounded-2xl bg-[rgba(0,0,0,0.50)] text-white  flex flex-col justify-around items-center py-16 ">
                    <h1 className="text-4xl font-semibold m8 text-center">Inicio <br />de Sesión</h1>
                    <form method="post" onChange={handleOnChange} className="w-4/5 flex flex-col justify-center items-center mb-4" onSubmit={sendData}>
                        <In
                            name={"username"}
                            type={"text"}
                            autoComplete={"on"}
                            rules={"debe ser un correo electrónico real  "}
                            placeholder={"usuario"}
                            label={"usuario"}
                        ></In>
                        <In
                            name={"password"}
                            type={"password"}
                            autoComplete={"on"}
                            rules={"no debe estar vacio"}
                            placeholder={"Contraseña"}
                            label={"Contraseña"}
                        ></In>
                        <button disabled={isSubmit} type="submit" className="bg-[#2bbbc1] px-16 py-4 rounded-xl font-semibold text-lg hover:bg-[#4b8688]">
                            {isSubmit ? "Enviando..." : "Iniciar Sesión"}
                        </button>
                    </form>
                    <p className="px-8">si has olvidado tu Contraseña haz click <a onClick={() => { navigate("/reset_contra") }}>aqui</a></p>
                </div>
                <div className="hidden lg:block lg:w-1/2 items-center ">
                    <img src={login} alt="" className="min-h-[800px] min-w-[800px]" />
                </div>
            </div>
        </section>
    );
}