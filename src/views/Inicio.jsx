import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Items from "../components/Items";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Inicio() {

    const items = [
        {
            "titulo": "Cita",
            "descripcion": "2025-06-01 09:00 - Dra. Ana Martínez",
            "tipo": true
        },
        {
            "titulo": "Corte",
            "descripcion": "Corte de mes",
            "tipo": false
        },
        {
            "titulo": "Cita",
            "descripcion": "2025-06-05 11:00 - Dr. Jorge Ramírez",
            "tipo": true
        },
        {
            "titulo": "Cita",
            "descripcion": "2025-06-07 08:45 - Dra. Cecilia Torres",
            "tipo": true
        },
        {
            "titulo": "Cita",
            "descripcion": "2025-06-10 17:00 - Dr. Manuel García",
            "tipo": true
        }
    ]
    const conteoCitasPorFecha = items.reduce((acc, item) => {
        if (item.titulo === "Cita") {
            const fecha = item.descripcion.split(" ")[0];
            acc[fecha] = (acc[fecha] || 0) + 1;
        }
        return acc;
    }, {});

    const data = Object.entries(conteoCitasPorFecha).map(([fecha, citas]) => ({ fecha, citas }));


    return (<>
        <div className="flex flex-col   items-start justify-start px-10 py-8       ">
            <h1 className="text-4xl font-semibold mb-6">Clientes por día</h1>

            <div className="flex flex-col lg:flex-row w-full gap-6    p-6 rounded-xl  ">

                {/* Columna izquierda */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="  p-4 rounded-lg  ">
                        {/* Gráfico aquí */}
                        <div className="w-full h-96">
                            <ResponsiveContainer>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="fecha" />
                                    <YAxis allowDecimals={false} />
                                    <Tooltip />
                                    <Bar dataKey="citas" fill="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="  p-4 rounded-lg  flex-col flex gap-4  overflow-x-hidden">

                        {
                            items.map(i =>
                                <Items
                                    titulo={i.titulo}
                                    descripcion={i.descripcion}
                                    tipo={i.tipo}
                                />
                            )
                        }
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className=" p-4 rounded-lg  ">
                        {/* Calendario */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-4">Selecciona una fecha:</h2>
                            <Calendar />
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-10 justify-center items-center min-h-[200px] min-w-1/2 text-white">
                        <h1>Manejo de citas</h1>
                        <Link
                            to="/dashboard/Agendar_citas"
                            className="bg-blue-500 hover:bg-blue-600 font-semibold px-6 py-3 rounded-lg transition duration-300"
                        >
                            Abrir panel de citas
                        </Link>

                    </div>
                </div>
            </div>
        </div>


    </>);
};