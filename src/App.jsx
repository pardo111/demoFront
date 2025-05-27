 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import InicioSesion from "./views/inicioSesion";

function App() {


  return (
    <>
    <BrowserRouter>    
      <Routes>
        <Route path="/InicioSesion" element={<InicioSesion/>}></Route>
      </Routes>
    </BrowserRouter>

 
    </>
  )
}

export default App
