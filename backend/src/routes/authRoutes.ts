import { Router } from "express";
import { register, login } from "../controllers/authController"
import { registerValidator, loginValidator } from "../utils/validators"
import { validationResultHandler } from "../middlewares/validationHandler"

const router = Router();

router.post("/register", registerValidator, validationResultHandler, register);
router.post("/login", loginValidator, validationResultHandler, login);

export default router;