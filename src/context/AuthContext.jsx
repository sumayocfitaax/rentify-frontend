import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage automatically when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUserLogin(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUserLogin(userData); // This updates the state everywhere instantly!
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserLogin(null);
  };

  return (
    <AuthContext.Provider value={{ userLogin, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};