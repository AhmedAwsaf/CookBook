import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { apiStart } from "../../api";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userObj, setUserObj] = useState({});

  async function checkTokenValidity() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiStart}/api/user/my`, {
        headers: { Authorization: localStorage.getItem("loginToken") },
      });
      console.log(response.data);
      if (response.data.success) {
        setIsAuthenticated(true);
        setUserObj(response.data.data);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, setIsAuthenticated, userObj }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
