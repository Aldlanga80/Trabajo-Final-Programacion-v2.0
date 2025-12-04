import User from "../models/User";
import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "shh";
const JWT_EXPIRES_IN = "1d";

export const registerUser = async (name: string, email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("El email ya está registrado");

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return { user, token };
};
