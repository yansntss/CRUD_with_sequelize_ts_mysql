import express from "express";
import UseController from "./controllers/UseController";

const router = express.Router();

router.post("/users", UseController.create);
router.get("/users", UseController.findAll);
router.get("/users/:userID", UseController.findOne);
router.put("/users/:userID", UseController.update);
router.delete("/users", UseController.destroy);

export { router };
