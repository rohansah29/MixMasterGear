import React from 'react'
import { createContext, useEffect, useState } from "react";

let username = (localStorage.getItem('username'));

export const AuthContext=createContext();

export default function AuthContextProvider({children}) {
const [category,setCategory]=useState("mixers");
const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    if(username !== null){
      setIsAuth(true)
    }
  },[])

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{category,setCategory,isAuth, setIsAuth, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
