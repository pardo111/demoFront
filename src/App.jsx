 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import InicioSesion from "./views/inicioSesion";
import Reset_contra from './views/reset_contra';
import Inicio from './views/Inicio';

function App() {


  return (
    <>
    <BrowserRouter>    
      <Routes>
        <Route path="/InicioSesion" element={<InicioSesion/>}></Route>
        <Route path="/reset_contra" element={<Reset_contra/>}></Route>
        <Route path="/inicio" element={<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>

 
    </>
  )
}

export default App
