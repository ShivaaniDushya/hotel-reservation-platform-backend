import express from "express";
import {
  saveRoom,
  getRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controllers/index.js";

const roomRouter = express.Router();

roomRouter.post("/", saveRoom);
roomRouter.get("/", getRoom);
roomRouter.get("/:id", getRoomById);
roomRouter.put("/:id", updateRoom);
roomRouter.delete("/:id", deleteRoom);

export default roomRouter;
