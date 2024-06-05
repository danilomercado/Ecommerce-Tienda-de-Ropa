import { useState, createContext } from "react";

export const AuthenticationContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

// eslint-disable-next-line react/prop-types
export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLogin = (email) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
