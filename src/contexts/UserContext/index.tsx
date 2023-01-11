import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginData } from "../../pages/Login/types";
import { iRegisterData } from "../../pages/Register/types";
import { api } from "../../services/api";
import { iDefaultProviderProps, iUserContext } from "./types";

export const UserContext = createContext({}as iUserContext);

export const UserProvider = ({ children }:iDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const toRegister = () => {
    navigate("/register");
  };

  const loggout = () => {
    navigate("/");
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (!token) {
        return loggout();
      }
      try {
        const { data } = await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(data);
        console.log(data);        
        setLoading(false);
      } catch (error) {
        console.error(error);
        loggout();
      } finally {
        setLoading(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);  


  const submitRegister = async (data: iRegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = async (data: iLoginData) => {
    try {
      setLoading(true);
      const resp = await api.post("/login", data);
      setUser(resp.data.user);
      localStorage.setItem("@TOKEN", resp.data.accessToken);
      localStorage.setItem("@USERID", resp.data.user.id);
      navigate("/home");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        products,
        loggout,
        submitRegister,
        submitLogin,
        toRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
