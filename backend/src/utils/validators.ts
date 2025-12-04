import { body } from "express-validator";

export const registerValidator = [
  body("name").isString().isLength({ min: 2 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 })
];

export const loginValidator = [
  body("email").isEmail(),
  body("password").exists()
];

export const productCreateValidator = [
  body("name").isString().isLength({ min: 1 }),
  body("price").isNumeric(),
  body("category").optional().isString()
];