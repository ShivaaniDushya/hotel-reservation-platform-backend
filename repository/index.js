import { saveUser, loginUser, getUser } from "./user.repository.js";
import {
  saveRoom,
  getRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "./room.repository.js";

export {
  //  user
  saveUser,
  loginUser,
  getUser,
  //  room
  saveRoom,
  getRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
};
