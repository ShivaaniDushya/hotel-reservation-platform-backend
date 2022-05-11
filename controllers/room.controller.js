import {
  saveRoomService,
  getRoomService,
  getRoomByIdService,
  updateRoomService,
  deleteRoomService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveRoom = async (req, res) => {
  try {
    const room = await saveRoomService(req.body);
    res.json(Success(room, "Successfully saved room."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getRoom = async (req, res) => {
  try {
    const rooms = await getRoomService();
    res.json(Success(rooms, "Successfully fetched rooms."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await getRoomByIdService(req.params.id);
    res.json(Success(room, "Successfully fetched room."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const room = await updateRoomService(req.params.id, req.body);
    res.json(Success(room, "Successfully updated room."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const room = await deleteRoomService(req.params.id, req.body);
    res.json(Success(room, "Successfully deleted room."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
