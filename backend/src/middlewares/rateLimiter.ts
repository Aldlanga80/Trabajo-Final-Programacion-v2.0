import rateLimit from "express-rate-limit"

export const rateLimiterAuth = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 100,
  max: Number(process.env.RATE_LIMIT_MAX) || 5,
  message: { error: "Demasiadas solicitudes en short time. Intente mas tarde" }
});