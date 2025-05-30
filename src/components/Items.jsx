export default function Items({
    titulo,
    descripcion,
    tipo
}) {
    const estilos = "min-w-[50px] max-h-[50px] rounded-full flex items-center justify-center text-white";

    return (<>
        <div className="flex flex-row space-x-2 hover:scale-110 transform transition duration-300">
            {
                !tipo ?
                    <div className={`bg-green-500 ${estilos}`}>
                        <i className="fas fa-scissors text-sm"></i>
                    </div>
                    :
                    <div className={`bg-blue-500 ${estilos}`}>
                        <i className="fas fa-stethoscope text-sm"></i>
                    </div>
            }



            <div className="flex flex-col">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    </>);
};