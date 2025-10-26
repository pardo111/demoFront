import {  Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";


export function RutasPrivadas(){

   const {user} = useUser();

   if(!user?.token)
      return <Navigate to='/Inicio_sesion'   replace/>

   return <Outlet/>;
}