import { useState, createContext } from "react";

export const AuthenticationContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLogin = (email, imageUrl, role, name, id, lastname) => {
    const userData = { email, imageUrl, role, name, id, lastname };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
