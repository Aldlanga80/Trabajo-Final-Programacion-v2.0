import { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const result = await authService.registerUser(name, email, password);

    res.status(201).json({ user: { id: result.user._id, email: result.user.email, name: result.user.name }, token: result.token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    res.json({ user: { id: result.user._id, email: result.user.email, name: result.user.name }, token: result.token });
  } catch (err) {
    next(err);
  }
};