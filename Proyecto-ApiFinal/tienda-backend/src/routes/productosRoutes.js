import { Router } from "express";
import { getAll, create, update, remove, importar } from "../controllers/productosController.js";
const router = Router();
router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/importar", importar); // ?page=1
export default router;
