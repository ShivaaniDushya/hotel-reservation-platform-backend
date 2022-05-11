import {
  saveRoom,
  getRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveRoomService = async (data) => {
  const { name, count, type, price, description, imageURL } = data;
  try {
    await saveRoom({ name, count, type, price, description, imageURL });
    return Promise.resolve("Successfully saved Room.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getRoomService = async () => {
  try {
    const rooms = await getRoom();
    return Promise.resolve(rooms);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getRoomByIdService = async (id) => {
  try {
    const room = await getRoomById(id);
    return Promise.resolve(room);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateRoomService = async (id, data) => {
  try {
    const room = await updateRoom(id, data);
    return Promise.resolve(room);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteRoomService = async (id) => {
  try {
    const room = await deleteRoom(id);
    return Promise.resolve(room);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
