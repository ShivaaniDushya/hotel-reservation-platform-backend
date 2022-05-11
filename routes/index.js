import express from "express";
import userRouter from "./user.route.js";
import roomRouter from "./room.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/room", roomRouter);

export default apiRouter;
