import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { API, getToken, removeToken, setToken } from "@/lib/utils";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        const token = getToken();
        if (token) {
          const res = await API.get("/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.status === 200) {
            setUser(res.data);
            setAccessToken(token);
            setIsLoggedIn(true);
          }
        }
      } catch (error) {
        console.log("Error during auth initialization:", error);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

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
        setToken(token)
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
    removeToken()
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ signup, signin, accessToken, user, loading, isLoggedIn, signout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
