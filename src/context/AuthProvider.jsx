import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { API } from "@/lib/utils";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(()=> {
    setLoading (true);
    const token = localStorage.getItem("authToken");
    if(token !== null ){
        setIsLoggedIn(true);
        setAccessToken(token);
    }
    setLoading(false);
    
  }, [user, accessToken, isLoggedIn])

  const signup = async (email, password, fullname) => {
    try {
      const res = await API.post("/auth/signup", {
        email,
        password,
        full_name: fullname,
      });
      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const signin = async (email, password) => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        let token = res.headers["authorization"];
        if (token?.startsWith("Bearer ")) {
          token = token.replace("Bearer ", "");
        }
        localStorage.setItem("authToken", token);
        setAccessToken(token);
        setUser(res.data);
        setIsLoggedIn(true);
      }
    } catch (error) {
      throw error;
    }
  };

  const signout = ()=> {
    setAccessToken(null)
    setUser(null)
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ signup, signin, accessToken, user, loading, isLoggedIn, signout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
