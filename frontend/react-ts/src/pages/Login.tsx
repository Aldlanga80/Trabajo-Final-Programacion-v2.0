import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await login(email, password);
  };


  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow w-80">
        <h2 className="text-xl mb-4 font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn mt-4 w-full">Ingresar</button>
      </form>
    </div>
  );
};

