import {  useNavigate } from "react-router-dom";

export function LandinPage(){

    const navigate = useNavigate();

    function onClick(){
        navigate('/Inicio_sesion')
    }

    return (
        <>
        este deberia ser el landing

        <button onClick={onClick} className="bg-black text-white">
            login
        </button>
        </>
    );
}