/* eslint-disable react/prop-types */


import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url"; // Ensure this import is correct


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        console.log(res.data)
        setUser(res.data)

      }
      catch(err){
        if (err.response && err.response.status === 404) {
          console.log("Endpoint not found: " + URL + "/api/auth/refetch");
        } else {
          console.log(err);
        }
      }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>)
}