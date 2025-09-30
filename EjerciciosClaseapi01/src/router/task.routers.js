
const { Router } = require("express");
const controller = require("../controllers/tasks.controller");

const router = Router();

router.get("/", controller.findAll);
router.post("/", controller.addTask);
router.get("/:id", controller.findOne);
router.put("/:id", controller.updateTask);
router.patch("/:id/complete", controller.completeTask);
router.delete("/:id", controller.removeTask);

module.exports = router;
