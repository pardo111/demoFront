import { NavLink } from "react-router-dom";
export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 px-2 py-1 rounded transition duration-300 transform hover:scale-110 ${isActive ? "text-white" : "opacity-50"
        }`;
    return (<>
        <nav>

            <ul className="text-xl flex flex-col items-center gap-4 md:gap-2 md:items-start">
                <li>
                    <NavLink to="inicio" className={navLinkClass}>
                        <i className="fa-solid fa-house text-sm mx-2"></i>
                        <p className="hidden md:inline">Inicio</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="administrar_usuarios" className={navLinkClass}>
                        <i className="fa-solid fa-users text-sm mx-2"></i>
                        <p className="hidden md:inline">Administrar Usuarios</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="configuracion" className={navLinkClass}>
                        <i className="fa-solid fa-wrench text-sm mx-2"></i>
                        <p className="hidden md:inline">Configuración</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="cuenta" className={navLinkClass}>
                        <i className="fa-solid fa-user text-sm mx-2"></i>
                        <p className="hidden md:inline">Cuenta</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reportes" className={navLinkClass}>
                        <i className="fa-solid fa-paperclip text-sm mx-2"></i>
                        <p className="hidden md:inline">Reportes</p>
                    </NavLink>
                </li>
            </ul>

        </nav>
    </>);
};