import { Router } from "express";
import { getAll, create, update, remove, login } from "../controllers/usuariosController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { verifyApiKey } from "../middlewares/apiKeyMiddleware.js";

const router = Router();

router.post("/login", login);

router.get("/", verifyApiKey, verifyToken, getAll);
router.post("/", verifyApiKey, create);
router.put("/:id", verifyApiKey, verifyToken, update);
router.delete("/:id", verifyApiKey, verifyToken, remove);

export default router;
