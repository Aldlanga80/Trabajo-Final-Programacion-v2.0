import { createContext, useContext, useState } from "react";
import { api } from "../api";


interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);


  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    setUser(res.data.user);
  };


  const logout = () => setUser(null);


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext)!;