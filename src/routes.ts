import express from "express";
import UseController from "./controllers/UseController";

const router = express.Router();

router.post("/users", UseController.create);
router.get("/users", UseController.findAll);
router.get("/users/:userId", UseController.findOne);
router.put("/users/:userId", UseController.update);
router.delete("/users/:userId", UseController.destroy);

export { router };
