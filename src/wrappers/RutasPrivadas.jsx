import {  Navigate, Outlet } from "react-router-dom";


export function RutasPrivadas({user}){


   if(!user)
      return <Navigate to='/'   />

   return <Outlet/>;
}