import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request {
  user?: { id: string; role?: string };
}

const JWT_SECRET = process.env.JWT_SECRET || "shh";

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No token" });
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, JWT_SECRET) as any;
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalido" });
  }
};

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) return res.status(401).json({ error: "No autorizado" });
  if (req.user.role !== "admin") return res.status(403).json({ error: "Requiere permiso del administrador" });
  next();
};