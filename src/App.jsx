
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio_sesion from "./views/publicas/Inicio_sesion";
import Reset_contra from './views/publicas/reset_contra';
import Dashboard from './wrappers/Dashboard';
import Inicio from './views/privadas/Inicio';
import Configuracion from './views/privadas/Configuracion';
import Administrar_usuarios from './views/privadas/Administrar_usuarios';
import Reportes from './views/privadas/Reportes';
import Cuenta from './views/privadas/Cuenta';
import Agendar_citas from './views/privadas/Agendar_cita';
import { LandinPage } from './views/publicas/LandinPage';
import { RutasPrivadas } from './wrappers/RutasPrivadas';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandinPage />}></Route>
          <Route path="/Inicio_sesion" element={<Inicio_sesion />}></Route>
          <Route path="/reset_contra" element={<Reset_contra />}></Route>
          <Route element={<RutasPrivadas   />}>
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="" element={<Inicio />} />
              <Route path="administrar_usuarios" element={<Administrar_usuarios />} />
              <Route path="configuracion" element={<Configuracion />} />
              <Route path="cuenta" element={<Cuenta />} />
              <Route path="Agendar_citas" element={<Agendar_citas />} />
              <Route path="reportes" element={<Reportes />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
