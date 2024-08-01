import { createContext, useState } from "react";

export const Theamcontext=createContext()

export const Contextproviderfunction=({children})=>{
    const[light,setlight]=useState("light")
    
    const theamset=()=>{
        setlight(light=="light"?"dark":"light")
    }
   return <Theamcontext.Provider value={{light,theamset}}>{children}</Theamcontext.Provider> 
}