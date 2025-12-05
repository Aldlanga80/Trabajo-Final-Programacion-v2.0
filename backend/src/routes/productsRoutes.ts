import { Router } from "express";
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController"
import { requireAuth } from "../middlewares/authMiddleware";
import { productCreateValidator } from "../utils/validators";
import { validationResultHandler } from "../middlewares/validationHandler";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProduct);


router.post("/", requireAuth, productCreateValidator, validationResultHandler, createProduct);
router.put("/:id", requireAuth, productCreateValidator, validationResultHandler, updateProduct);
router.delete("/:id", requireAuth, deleteProduct);

export default router;
