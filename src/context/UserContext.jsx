import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}){


   const [user, setUser] = useState({
    username:"",
    token:""
   });
   
return (
  < UserContext.Provider value={{user, setUser}}>
   {children}
  </UserContext.Provider>
);
}


export function useUser(){
   return useContext(UserContext);
}