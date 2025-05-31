
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio_sesion from "./views/inicio_sesion";
import Reset_contra from './views/reset_contra';
import Dashboard from './views/Dashboard';
import Inicio from './views/Inicio';
import Configuracion from './views/Configuracion';
import Administrar_usuarios from './views/Administrar_usuarios';
import Reportes from './views/Reportes';
import Cuenta from './views/Cuenta';
import Agendar_citas from './views/Agendar_cita';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Inicio_sesion" element={<Inicio_sesion />}></Route>
          <Route path="/reset_contra" element={<Reset_contra />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="administrar_usuarios" element={<Administrar_usuarios />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="cuenta" element={<Cuenta />} />
            <Route path="Agendar_citas" element={<Agendar_citas />} />
            <Route path="reportes" element={<Reportes />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
